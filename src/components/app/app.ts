import { ProductList } from "../products/index";

export class App {
  private productList = new ProductList();
  
  render() {
    return `
    <h1>Рендерим в эпп заголовок h1 по id<h1>
    <div>
      ${this.productList.render()}
    </div>
    `;
  }
}

// const el = document.createElement("h3");
// el.innerText = "Текст в созданном элементе через HTMLElement в класс App";
// document.body.appendChild(el);
