# Resumo: Redux Standard

inspirado em https://github.com/WeltonThomasFerreira/redux-toolkit-workflow/blob/main/REDUX_STANDARD.md

## Store

```jsx
// src/store/index.jsx
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducer/index.js';

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
```

## Provider

```jsx
// src/index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/index';

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root'),
);
```

## Actions

```jsx
// src/actions/index.js
export const REDUX_ACTION = 'REDUX_ACTION';

export const reduxAction = (value) => ({
  type: REDUX_ACTION,
  payload: value,
});
```

## Reducer

```jsx
// src/reducer/myReducer.js
import { REDUX_ACTION } from './actions/index.js';

const initialState = { value: '' };

export default function reduxReducer(state = initialState, action) {
  switch (action.type) {
  case REDUX_ACTION:
    return { ...state, value: action.payload };
  default:
    return state;
  }
}
```

## Root Reducer

```jsx
// src/reducer/index.js
import { combineReducers } from 'redux';
import reducer from './folder/file';
import anotherReducer from './folder/file';

export default combineReducers({
  reducer,
  anotherReducer,
});
```

## Usando no Componente

```jsx
import { connect } from 'react-redux';
import { reduxAction } from './action/index.js';

class FooBar extends Component {
  render() {
    const { value, action } = this.props;
    return ()
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.reducer.value,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (value) => dispatch(reduxAction(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FooBar);
//export default connect(null, mapDispatchToProps)(FooBar);
```

## Usando Thunks

### Actions

```jsx
export const fetchFoo = (params) => async (dispatch) => {
  const response = await fetchFooAPI(params);
  dispatch(actionFoo(response));
  dispatch(anotherActionFoo());
};
```

### Ex: API

```jsx
// servies/index.js
export default fetchApi = async (params) => {
  const response = await fetch(
    `https://bar.com/api.php?=${params}`,
  );
  return response;
};
```