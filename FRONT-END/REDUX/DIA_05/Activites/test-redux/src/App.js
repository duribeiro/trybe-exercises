import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ButtonClicks from './buttonClicks';
import NumberClicks from './numberClicks';

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <ButtonClicks />
          <NumberClicks />
        </Provider>
      </div>
    );
  }
}

export default App;
