import { IProductItem } from "../../product_item/interface/i_product_item";

export interface CartProducts {
  [key: string]: {
    product: IProductItem;
    amount: number;
  };
}

export interface Cart {
    products: CartProducts;
}
