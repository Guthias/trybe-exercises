const Redux = require('redux');

const INITIAL_STATE = {
  login: false,
  email: ""
}

// Criando o Reducer
const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email,
      }
    default:
      return state;
  }
}

// Criando uma Action
const fazerLogin = (email) => ({
  type: 'LOGIN',
  email,
});

// Criando a Store
const store = Redux.createStore(reducer);

// Enviando a dispatch para alterar a Store
store.dispatch(fazerLogin('teste@teste.com'));

console.log(store.getState());
