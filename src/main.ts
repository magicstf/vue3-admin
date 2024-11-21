/*
 * @Author: sutengfei
 * @Date: 2024-11-13 11:09:04
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-15 16:53:44
 */
import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
let app = createApp(App);
let pinia = createPinia();
app.use(router);
app.use(pinia);
app.mount("#app");
