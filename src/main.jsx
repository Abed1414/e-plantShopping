import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store'; // Import the configured Redux store
import App from './App'; // Import your App component

ReactDOM.render(
  <Provider store={store}> {/* Provide the Redux store to the App */}
    <App />
  </Provider>,
  document.getElementById('root')
);
