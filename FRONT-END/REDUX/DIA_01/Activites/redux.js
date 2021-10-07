// action que altera o login
const fazerLogin = (email) => ({
  type: "LOGIN",
  email,
});

// estado inicial
const ESTADO_ININIAL = {
  login: false,
  email: "",
};

// cria o redux com um valor pardão para o state
const reducer = (state = ESTADO_ININIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default: // No switch, sempre precisamos ter um caso default!I
    return state;
  }
};

// criar uma store
const store = Redux.createStore(reducer);

store.dispatch(fazerLogin("alguem@email.com"))

// acessa o store
console.log(store.getState());
