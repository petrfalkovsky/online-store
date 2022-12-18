import { App } from "./components/app/index";
import { store } from "./components/store/store";

const root = document.getElementById("root");

const app = new App();
root.innerHTML = app.render();
store.$state.subscribe(() => {
    root.innerHTML = app.render(); // перерендер по подписке
});
