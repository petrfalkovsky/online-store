import { IProductItem } from "./interface/i_product_item";

export class ProductItem {
  constructor(private product: IProductItem) {}

  render() {
    return `
        <div class="card" style="width: 18 rem; margin: 1em;">
          <img src="${this.product.image}" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">${this.product.name}</h5>
              <p class="card-text">$${this.product.price}</p>
              <a class="btn btn-primary" href="#" >Добавить в корзину</a>
            </div>
        </div>
        `;
  }
}
