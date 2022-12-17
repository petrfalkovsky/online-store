import { getProducts } from "../../../data/products_data";
import { store } from "../../store/store";
import { IProductItem } from "../interface/i_product_item";

export class ProductModel {
  static isExisting = false;
  static instance: ProductModel;

  constructor() {
    if (ProductModel.isExisting) {
      return ProductModel.instance;
    }
    ProductModel.isExisting = true;
    ProductModel.instance = this;
  }

  getProducts(): Promise<IProductItem[]> {
    return getProducts().then((products: IProductItem[]) => {
      store.update({
        products,
      });
      return products;
    });
  }
}

export const productModel = new ProductModel();
