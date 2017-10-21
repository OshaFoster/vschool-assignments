import React from "react"
import {connect} from "react-redux"
import {addOne, subOne, reset} from "../redux/action/index.js"



function Counter(props){
    return(
        // const styles ={
        //     width: "15%",
        //     margin: "auto",
        //     display: "flex",
        //     justifyContent: "space-between",
        //     position: "relative",
        //     transform: "translateY(-50%)",
        //     fontSize: "120px"
        // }
        <div >
            <button onClick={props.addOne}>+</button>
        <span>{props.counter}</span>
    <button onClick={props.subOne}>-</button>
<button onClick={props.reset}>Reset</button>
        </div>

    )
}

//connect the dispatch with action createStore
//takes actions it passes them down tot component via props
//automatically cals the dispatch withn those acitons git called

//connect takes two arguments, first what we want from props,
// second is the set of action creators we want to dispatch
const mapStateToProps = (state)=>{
    return state;
}
export default connect(mapStateToProps, {addOne, subOne, reset})(Counter);
//every redux
