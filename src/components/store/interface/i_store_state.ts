import { Cart } from "../../cart/intrface/i_cart";
import { IProductItem } from "../../product_item/interface/i_product_item";

export interface IStoreState {
  products: IProductItem[];
  cart: Cart;
}
