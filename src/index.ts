import { App } from "./components/app/app";

const root = document.getElementById("root");

const app = new App();
root.innerHTML = app.render();
