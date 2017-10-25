import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducer from "./redux/reducers/";
import App from "./main/App";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(()=>{
    console.log(store.getState())
})

ReactDOM.render(<App/>, document.getElementById('root'))
