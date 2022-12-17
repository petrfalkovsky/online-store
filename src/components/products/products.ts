
import { IProductItem } from "../product_item/interface/i_product_item";
import { productModel } from "../product_item/model/product_model";
import { ProductItem } from "../product_item/product_item";
import { store } from "../store/store";

export class ProductList {
  private loading = false;
  private error: Error | null = null;
  private products: IProductItem[] = [];

  constructor() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.loading = true;
    productModel
      .getProducts()
      .then((products) => {
        this.products = products;
      })
      .catch((err) => {
        this.error = err;
      }).finally(() => {
        this.loading = false;
        store.$render.next(true); // todo потестить перерендер
      });
  }

  render() {
    return `
    <h3>Заголовок ProductList:</h3>
    ${this.products
      .map((product) => new ProductItem(product))
      .map((product) => product.render())
      .join("")}
    ${this.loading ? `<p>Loading..</p>` : ""}
    ${this.error ? `<p>${this.error.message}</p>` : ""}
    <div>
    <button>назад</button>
    <button>вперед</button>
    </div>
    `;
  }
}
