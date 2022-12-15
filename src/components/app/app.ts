export class App {
  render() {
    console.log(
      "Привет, тут будет страница для заказа кастомных вещей от @ostuffzdes"
    );

    const el = document.createElement("h3");
    el.innerText = "Текст в созданном элементе через HTMLElement в класс App";
    document.body.appendChild(el);

    return `<h1>Рендерим в эпп заголовок h1 по id<h1>`;
  }
}
