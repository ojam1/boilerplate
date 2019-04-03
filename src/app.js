import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

const store = configureStore();

const jsx = (
  <div>
    <Provider store={store} />
    Hello World
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));