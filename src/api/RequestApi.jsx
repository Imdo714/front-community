import axios from "axios";
import { globalLogout } from "../useContext/AuthContext";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_SERVER,
});

// 매 요청마다 accessToken을 Authorization 헤더에 자동으로 추가
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; 
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const serverMessage = error.response?.data?.message;

    if (status === 401 && serverMessage === "토큰이 만료되었습니다.") {
      globalLogout();
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

const requestApi = async (url, method = "GET", data = null) => {
    try {
        const isFormData = data instanceof FormData;

        const response = await api({
            url,
            method,
            data,
            headers: isFormData ? {} : { "Content-Type": "application/json" }, // FormData 로 들어오면 브라우저에 맡기고 FormData가 아니면 json형식으로 
        });

        return response.data; 
    } catch (error) {
        const status = error.response?.status;
        const rawMessage = error.message;
        const serverMessage = error.response?.data?.message;

        console.log("에러 상태 코드:", status);
        console.log("서버 메시지:", serverMessage);
        console.log("에러 전체:", error);

        let message;

        if (rawMessage === "Network Error" || !error.response) {
            message = "서버에 연결할 수 없습니다. 잠시 후 다시 시도해 주세요.";
        } else if (status === 401) {
            message = serverMessage || "로그인이 필요합니다.";
        } else if (status === 403) {
            message = serverMessage || "접근 권한이 없습니다.";
        } else if (status === 409) {
            message = serverMessage || "잘못된 요청입니다.";
        } else {
            message = serverMessage || "알 수 없는 오류가 발생했습니다.";
        }
        
        throw new Error(message);
    }
};

export default requestApi;