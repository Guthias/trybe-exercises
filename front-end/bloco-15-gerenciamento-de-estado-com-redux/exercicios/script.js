const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const color = document.getElementById('value');

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function colorReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index < state.colors.length ? state.index + 1 : state.colors.length,
      }
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index > 0 ? state.index - 1 : 0,
      }
    default:
      return state
  }
}

const store = Redux.createStore(colorReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  const { colors, index } = store.getState();
  color.innerText = colors[index];
});

previousButton.addEventListener('click', () => {
  store.dispatch({ type: 'PREVIOUS_COLOR' });
});

nextButton.addEventListener('click', () => {
  store.dispatch({ type: 'NEXT_COLOR' });
});
