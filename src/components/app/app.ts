import { ProductList } from "../products/index";
import { Cart } from "../cart/index";
import { IMainComponent } from "../main_component/interface/i_main_comp";

class App implements IMainComponent {
  private productList = new ProductList();
  private cart = new Cart();

  render() {
    return `
    <div class="container">
        <div class="row">
            <div class="col-3">
            <div>
            <p>
              Всего в корзине: Amount товаров на Summ
            </p>
              <ul class="list-group">
                      <li class="list-group-item d-flex justify-content-between align-items-center">
                          Название товара Цена
                          <div class="btn-group" role="group" aria-label="">
                              <button type="button" class="btn plus" data-id="tovar1">+</button>
                              <button type="button" class="btn minus" data-id="tovar1">-</button>
                          </div>
                          <span class="badge bg-primary rounded-pill">Эмаунт</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center">
                      Название товара Цена
                      <div class="btn-group" role="group" aria-label="">
                          <button type="button" class="btn plus" data-id="tovar2">+</button>
                          <button type="button" class="btn minus" data-id="tovar2">-</button>
                      </div>
                      <span class="badge bg-primary rounded-pill">Эмаунт</span>
                  </li>
              </ul>
          </div>
            </div>
            <div class="col-9">
              ${this.productList.render()}
            </div>
        </div>
    </div>
    `;
  }

  addEvent() {
    this.cart.addEvent();
    this.productList.addEvent();
  }
}

export { App };
