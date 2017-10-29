import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import reducer from "./redux/reducers/"
import App from "./main/App"

const store = createStore(reducer);
store.subscribe(()=>{
    console.log(store.getState)
})

ReactDOM.render(<Provider><App/></Provider>, document.getElementById('root'))
