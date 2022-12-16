import { ProductItem } from '../Product_item/index';

export class ProductList {
  private productArr: ProductItem[] = [
    new ProductItem(),
    new ProductItem(),
    new ProductItem(),
    new ProductItem(),
    new ProductItem(),
    new ProductItem(),
  ];

  render() {
    return `<h3>Заголовок ProductList:</h3>
    ${this.productArr.map((item) => item.render()).join("")}`;
  }
}
