import { ProductList } from "../products/index";

export class App {
  private productList = new ProductList();

  render() {
    return `
    <div class="container">
        <div class="row">
            <div class="col-12">
            ${this.productList.render()}
            </div>
        </div>
    </div>
    `;
  }
}

// const el = document.createElement("h3");
// el.innerText = "Текст в созданном элементе через HTMLElement в класс App";
// document.body.appendChild(el);
