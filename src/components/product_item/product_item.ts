import { IProductItem } from "./interface/i_product_item";

export class ProductItem {
  constructor(private product: IProductItem) {}

  render() {
    return `
        <div>
          <h3>
            ${this.product.name}
          </h3>
          <p>
            <img src="${this.product.image}" />
          </p>
          <p>
          <p>$${this.product.price}</p>
        </p>
        </div>
        `;
  }
}
