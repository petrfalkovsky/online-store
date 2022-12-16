import { getProducts } from "../../../data/products_data";
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
    return getProducts(); // берем промис продутка из базы данных
  }
}

export const productModel = new ProductModel();
