import { IMainComponent } from "../main_component/interface/i_main_comp";
import { Store } from "../store/store";
import { CartProducts } from "./intrface/i_cart";

class Cart implements IMainComponent {
  private products: CartProducts = {};
  private amount = 0;
  private sum = 0;
  private store = new Store();

  constructor() {
    this.store.$state.subscribe(({ cart }) => {
      this.products = cart.products;
      this.amount = Object.keys(this.products).length;
      this.sum = Object.values(this.products).reduce(
        (sum, item) => sum + item.product.price,
        0
      );
    });
  }

  render() {
    return `
    <div>
        <p>
            Ваши покупки
        </p>
        <ul class="list-group">
        ${Object.values(this.products)
          .map(
            ({ product, amount }) => `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    ${product.name} (${product.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })})
                    <div class="btn-group" role="group" aria-label="">
                        <button type="button" class="btn">+</button>
                        <button type="button" class="btn">-</button>
                    </div>
                    <span class="badge bg-primary rounded-pill">${amount}</span>
                </li>
             `
          )
          .join("")}
        </ul>
        <p>
            Всего: ${this.amount} товаров, ${this.sum.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })}
        </p>
    </div>
        `;
  }

  addEvent() {}
}

export { Cart };
