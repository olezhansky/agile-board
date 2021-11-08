import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import RootStore from "./store/index";
import { CssBaseline } from "@material-ui/core";
import store from "./store/index";

export const StoreContext = createContext(store);

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <CssBaseline />
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
