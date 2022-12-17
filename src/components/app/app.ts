import { ProductList } from "../products/index";
import { Cart } from "../cart/index";

export class App {
  private productList = new ProductList();
  private cart = new Cart();

  render() {
    return `
    <div class="container">
        <div class="row">
            <div class="col-3">
              <p>${this.cart.render()}</p>
            </div>
            <div class="col-9">
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
