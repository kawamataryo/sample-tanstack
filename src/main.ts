import "./assets/main.css";

import { VueQueryPlugin } from "@tanstack/vue-query";
import { createApp } from "vue";
import App from "./App.vue";

declare global {
  interface Window {
    __VUE_DEVTOOLS_GLOBAL_HOOK__: any;
  }
}

const app = createApp(App);

app.use(VueQueryPlugin, { enableDevtoolsV6Plugin: true })
app.mount("#app");

// enabled devtools
const devtools = window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
devtools.Vue = app;
devtools.enabled = true;
devtools.emit("init", app, app.version, {});
