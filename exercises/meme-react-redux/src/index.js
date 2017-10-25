import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";    //, applyMiddleware
import reducer from "./redux/reducers/";
import App from "./main/App";
//import thunk from "redux-thunk"

const store = createStore(reducer);
store.subscribe(()=>{
    console.log(store.getState())
});

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'))


// import redux thunk slack
