import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Store"; 
import App from "./App";
ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>,
    
);
