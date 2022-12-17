import { IProductItem } from "../../product_item/interface/i_product_item";

export interface IStoreState {
  product: IProductItem[];
  cart: Cart;
}
