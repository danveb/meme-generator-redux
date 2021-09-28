import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import Provider component from react-redux
import { Provider } from 'react-redux'
// import Reducer 
import rootReducer from './reducers/rootReducer'
// import createStore from Redux 
import { createStore } from 'redux' 

// call store with Reducer
// - use Redux Dev Tools 
const store = createStore(
  rootReducer, 
  // Redux Dev Tools 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) 
ReactDOM.render(
  <React.StrictMode>
    {/* pass "store" to the Provider Component */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
