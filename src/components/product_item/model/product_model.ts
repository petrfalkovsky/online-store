import { getProducts } from "../../../data/products_data";
import { Store } from "../../store/store";
import { IProductItem } from "../interface/i_product_item";

class ProductModel {
  static isExisting = false;
  static instance: ProductModel;

  private store = new Store();

  constructor() {
    if (ProductModel.isExisting) {
      return ProductModel.instance;
    }
    ProductModel.isExisting = true;
    ProductModel.instance = this;
  }

  getProducts(): Promise<IProductItem[]> {
    return getProducts().then((products: IProductItem[]) => {
      this.store.update({
        products,
      });
      return products;
    });
  }
}

export { ProductModel };
