import { BehaviorSubject } from "../../../node_modules/rxjs/dist/types/internal/BehaviorSubject";
import { IStoreState } from "./interface/i_store_state";

const DAFAULT_STATE: IStoreState = {
  products: [],
  cart: {
    products: {},
  },
};

export class Store {
  static exists = false;
  static instance: Store;

  private state = DAFAULT_STATE;
  public $state = new BehaviorSubject<IStoreState>(this.state);

  constructor() {
    if (Store.exists) {
      return Store.instance;
    } else {
      Store.exists = true;
      Store.instance = this;
    }

    this.$state.subscribe((state: IStoreState) => {
      this.state = state;
    });
  }

  update(state: Partial<IStoreState> = {}) {
    this.$state.next({
      ...this.state,
      ...state,
    });
  }
}

export const store = new Store();
