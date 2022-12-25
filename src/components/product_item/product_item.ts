import { CartModel } from "../cart/model/cart_model";
import { IMainComponent } from "../main_component/interface/i_main_comp";
import { IProductItem } from "./interface/i_product_item";

export class ProductItem implements IMainComponent {
  constructor(private product: IProductItem) {}

  private getIdproduct = () => `product_${(this, this.product.id)}`;
  private cartModel = new CartModel();

  render() {
    return `
        <div class="card" style="width: 18 rem; margin: 1em;">
          <img src="${this.product.image}" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">${this.product.name}</h5>
              <p class="card-text">${this.product.price.toLocaleString(
                "en-US",
                {
                  style: "currency",
                  currency: "USD",
                }
              )}</p>
              <a class="btn btn-primary" href="#" id="${this.getIdproduct()}" >Добавить в корзину</a>
            </div>
        </div>
        `;
  }

  addEvent() {
    const btn = document.getElementById(this.getIdproduct());
    if (!btn) {
      throw new Error("Something went wrong with Buy button!");
    }
    btn.addEventListener<"click">("click", (event) => {
      event.preventDefault();
      this.cartModel.addProduct(this.product);
    });
  }
}
