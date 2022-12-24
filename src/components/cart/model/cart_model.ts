import { IProductItem } from "../../product_item/interface/i_product_item";
import { Store } from "../../store/store";

class CartModel {
  static isExisting = false;
  static instance: CartModel;
  private store = new Store();

  constructor() {
    if (CartModel.isExisting) {
      return CartModel.instance;
    }
    CartModel.isExisting = true;
    CartModel.instance = this;
  }

  addProduct(product: IProductItem): void {
    this.store.update({
      cart: {
        products: { [product.id]: { amount: 1, product } },
      },
    });
  }
}

export { CartModel };
