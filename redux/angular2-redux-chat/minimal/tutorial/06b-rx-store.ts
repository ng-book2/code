/// <reference path="../../typings/main.d.ts"/>
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/scan';

interface Action {
  type: string;
  payload?: any;
}

interface Reducer<T> {
  (state: T, action: Action): T;
}

class Store<T> extends BehaviorSubject<T> {
  private _dispatcher: Subject<Action>;

  constructor(
    private _reducer: Reducer<T>,
    initialState: T
  ) {
    super(initialState);

    this._dispatcher = new Subject<Action>();
    this._dispatcher
      .scan(
        (state: T, action: Action) => this._reducer(state, action),
        initialState)
      .subscribe((state) => super.next(state));
  }

  getState(): T {
    return this.value;
  }

  dispatch(action: Action): void {
    this._dispatcher.next(action);
  }
}

// same reducer as before (!)
let reducer: Reducer<number> = (state: number, action: Action) => {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  case 'PLUS':
    return state + action.payload;
  default:
    return state;
  }
};

// create a new store
console.log('-- store --');
let store = new Store<number>(reducer, 0);
console.log(store.getState()); // -> 0

store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); // -> 1

store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); // -> 2

store.dispatch({ type: 'DECREMENT' });
console.log(store.getState()); // -> 1

// observing!
console.log('-- store2 --');
let store2 = new Store<number>(reducer, 0);
store2.subscribe((newState => console.log("state: ", newState))); // -> state: 0
store2.dispatch({ type: 'INCREMENT' }); // -> state: 1
store2.dispatch({ type: 'INCREMENT' }); // -> state: 2
store2.dispatch({ type: 'DECREMENT' }); // -> state: 1
