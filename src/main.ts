import "./assets/main.css";

import { VueQueryPlugin } from "@tanstack/vue-query";
import { createApp } from "vue";
import App from "./App.vue";
import { initializeDb } from "./client";

initializeDb();
const app = createApp(App);
 // Start of Selection
app.use(VueQueryPlugin, { enableDevtoolsV6Plugin: true})
app.mount("#app");
