import { IProductItem } from "../../product_item/interface/i_product_item";

export interface Cart {
    products: {
        [key: string]: {
            product: IProductItem;
            amount: number;
        }
    }
}