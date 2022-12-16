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
}

export const getProductModel = new ProductModel();
