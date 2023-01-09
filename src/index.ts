import { App } from "./components/app/index";
import { Store } from "./components/store/store";

const root = document.getElementById("root");
const store = new Store();

const app = new App();
if (root === null) {
  throw new Error("root not found");
} else root.innerHTML = app.render();
store.$state.subscribe(() => {
  root.innerHTML = app.render(); // перерендер по подписке
  app.addEvent();
});
