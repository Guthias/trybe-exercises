const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function colorReducer(state = INITIAL_STATE, action) {
  return state;
}

const store = Redux.createStore(colorReducer);

console.log(store.getState());
