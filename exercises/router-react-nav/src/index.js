import React from "react";
import ReacDom from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./main/App"
import "./index.css"

ReactDom.render(<Router><App/></Router>, document.getElementById('root'));
