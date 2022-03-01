const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function colorReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index < state.colors.length ? index + 1 : state.colors.length,
      }
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index > 0 ? index - 1 : 0,
      }
    default:
      return state
  }
}

const store = Redux.createStore(colorReducer);

console.log(store.getState());
