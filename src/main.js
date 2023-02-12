import { createApp } from "vue";
import ElementPlus from "element-plus";
/* 引入簡體中文 */
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "element-plus/dist/index.css";
import router from "./router/index";
import store from "./store.js";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.use(ElementPlus, {
    locale: zhCn,
});
app.provide("store", store);
app.mount("#app");
