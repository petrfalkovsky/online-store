import { IMainComponent } from "../main_component/interface/i_main_comp";
import { IProductItem } from "../product_item/interface/i_product_item";
import { productModel } from "../product_item/model/product_model";
import { ProductItem } from "../product_item/product_item";
import { store } from "../store/store";

export class ProductList implements IMainComponent {
  private loading = false;
  private error: Error | null = null;
  private products: IProductItem[] = []; // todo тип продакт наверное?
  private productsComponent: ProductItem[] = []; // todo ок, а тут тогда?)

  constructor() {
    this.fetchProducts();

    store.$state.subscribe(({ products }) => {
      this.products = products;
      this.productsComponent = products.map(
        (product) => new ProductItem(product)
      );
      if (products.length) {
        this.error = null;
        this.loading = false;
      }
    });
  }

  fetchProducts() {
    this.loading = true;
    store.update();
    productModel.getProducts().catch((err) => {
      this.error = err;
      this.loading = false;
    });
  }

  render() {
    return `
    <h3>Заголовок ProductList:</h3>
    <div style="display: flex; flex-wrap: wrap;">
      ${this.productsComponent.map((product) => product.render()).join("")}
    </div>
    <div>
    ${
      this.loading
        ? `
          <div class="spinner-border" role="status">
              <span class="visually-hidden">Laoding..</span>
          </div>
          `
        : ""
    }
    </div>
    <div>
    ${
      this.error
        ? `<div class="alert alert-danger" role="alert">${this.error.message}</div>`
        : ""
    }
    </div>
    <div class="btn-group" role="group" aria-label="">
        <button type="button" class="btn btn-primary">Назад</button>
        <button type="button" class="btn btn-primary">Вперёд</button>
    </div>
    `;
  }

  addEvent() {
    this.productsComponent.forEach((component) => component.addEvent());
  }
}
