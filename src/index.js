import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./components/store";



// ReactDOM.render(
// <Provider store={store}>
// <App />
// </Provider>
// document.getElementById("root")
// );

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root') // Ensure you have a div with id 'root' in your index.html
  );