export class Store {
    static exists = false;
    static instance: Store;

    // todo когда будет интернет, установить и импортнуть rxjs
    public $render = new BehaviorSubject(true);

    constructor() {
        if (Store.exists){
            return Store.instance;
        } else {
            Store.exists = true;
            Store.instance = this;
        }
    }
}

export const store = new Store();