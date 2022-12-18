import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "tw-elements";
import VueDragscroll from "vue-dragscroll";

const app = createApp(App);

app.use(router);
app.use(VueDragscroll);

app.mount("#app");
