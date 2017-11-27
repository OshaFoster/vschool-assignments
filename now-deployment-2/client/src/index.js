import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            test: "loading..."
        };
    }

    componentDidMount() {
        axios
        .get("/test")
        .then(response => {
            this.setState({
                test: response.data.test
            });
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <h1>{this.state.test}</h1>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));
