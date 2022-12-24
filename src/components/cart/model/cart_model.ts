import { IProductItem } from "../../product_item/interface/i_product_item";
import { store } from "../../store/store";

export class CartModel {
  static isExisting = false;
  static instance: CartModel;

  constructor() {
    if (CartModel.isExisting) {
      return CartModel.instance;
    }
    CartModel.isExisting = true;
    CartModel.instance = this;
  }

  addProduct(product: IProductItem): void {
    store.update({
      cart: {
        products: { [product.id]: { amount: 1, product } },
      },
    });
  }
}

export const cartModel = new CartModel();
