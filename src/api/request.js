import axios from "axios";
import router from "@/router";
const BASE_API = import.meta.env.VITE_BASE_API;
const LOCALSTORE_TOKENNAME = import.meta.env.VITE_LOCALSTORE_TOKENNAME;

// 創建axios實例
const service = axios.create({
    baseURL: BASE_API,
});
// 請求攔截器
service.interceptors.request.use(
    config => {
        const token = localStorage.getItem(LOCALSTORE_TOKENNAME);
        token === null ? delete config.headers.Authorization : (config.headers.Authorization = token);
        return config;
    },
    error => {
        // 處理請求錯誤
        console.log(error); // 用於調試
        return Promise.reject(error);
    }
);

// 響應攔截器
service.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status === 403) {
            router.push("/login");
            // for (let i = 1; i < 10000; i++) {
            //     clearInterval(i);
            // }
        }
        return Promise.reject(error);
    }
);

export default service;
