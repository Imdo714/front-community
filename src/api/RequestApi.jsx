import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_SERVER,
  headers: {
    "Content-Type": "application/json",
  },
});

const requestApi = async (url, method = "GET", data = null) => {
    try {
        const response = await api({
            url,
            method,
            data,
    });
        console.log(response);
        return response.data; 
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
};

export default requestApi;