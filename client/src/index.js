import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import reducers from "./ducks/reducers";

import "./index.css";

// create a store to house our state, pass it our reducers and middleware as specified in docs
const store = createStore(reducers, compose(applyMiddleware(thunk)));

// wrap our app in our store provider and browser router
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
