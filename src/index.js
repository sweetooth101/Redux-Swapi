import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { applyMiddleware, createStore } from 'redux';
import thuck from 'redux-thunk';
import logger from 'redux-thunk';
import { rootReducer} from './reducers';

const store = createStore(
  rootReducer, applyMiddleware(thuck)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
