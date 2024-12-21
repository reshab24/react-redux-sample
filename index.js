import React, { Component } from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import store from './Store/index.js';
import { Hello } from './Hello.js';

const App = () => {
  return (
    <Provider store={store}>
      <Hello />
    </Provider>
  );
};

render(<App />, document.getElementById('root'));
