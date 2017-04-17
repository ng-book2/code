interface Action {
  type: string;
  payload?: any;
}

interface Reducer<T> {
  (state: T, action: Action): T;
}

let reducer: Reducer<number> = (state: number, action: Action) => {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }
  if (action.type === 'DECREMENT') {
    return state - 1;
  }
  return state;
};

let incrementAction: Action = { type: 'INCREMENT' };

console.log( reducer(0, incrementAction )); // -> 1
console.log( reducer(1, incrementAction )); // -> 2

let decrementAction: Action = { type: 'DECREMENT' };

console.log( reducer(100, decrementAction )); // -> 99
