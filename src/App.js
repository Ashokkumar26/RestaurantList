import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import ListRestaurant from "./component/listRestaurant";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ListRestaurant />
      </Provider>
    </div>
  );
}

export default App;
