export class Cart {
  render() {
    return `
    <div>
        <p>
            Ваши покупки
        </p>
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Что-то добавили в корзину ($100)
                <div class="btn-group" role="group" aria-label="">
                    <button type="button" class="btn">+</button>
                    <button type="button" class="btn">-</button>
                </div>
                <span class="badge bg-primary rounded-pill">10</span>
            </li>
        </ul>
        <p>
            Всего: 12 товаров, $700
        </p>
    </div>
        `;
  }
}
