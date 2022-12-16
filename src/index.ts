import { App } from "./components/app/index";

const root = document.getElementById("root");

const app = new App();
root.innerHTML = app.render();
