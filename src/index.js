import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import App from "./Components/App";
import store from "./redux/store";
// import { store, persistor } from "./redux/store";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
