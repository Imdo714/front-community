import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_SERVER,
  // headers: {
  //   "Content-Type": "application/json",
  // },
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
        const rawMessage = error.message;
        console.log(rawMessage);

        // 서버 응답 없을 시
        if (rawMessage === "Network Error" || !error.response) {
          throw new Error("서버에 연결할 수 없습니다. 잠시 후 다시 시도해 주세요.");
        }

        // 서버가 에러 응답한 경우
        const message = error.response?.data?.message || "알 수 없는 서버 오류입니다.";
        throw new Error(message);
    }
};

export default requestApi;