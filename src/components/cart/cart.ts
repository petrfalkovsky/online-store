import { store } from "../store/store";
import { CartProducts } from "./intrface/i_cart";

export class Cart {
  private products: CartProducts = {};
  private amount = 0;
  private sum = 0;

  constructor() {
    store.$state.subscribe((cart: Cart) => {
      // todo здесь ошибка, по-моему надо cart передать объектом
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
                    ${product.name} ($${product.price})
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
            Всего: ${this.amount} товаров, $${this.sum}
        </p>
    </div>
        `;
  }
}
