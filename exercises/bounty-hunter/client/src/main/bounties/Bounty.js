import React from "react";
import {connect} from "react-redux"
import {bounties} from "../../redux/actions/"

function Bounty(props){
    const style ={
        width:"300px",
        height:"500px",
        border:"solid black 1px",
        margin: "20px"
    }
    return (
        <div style={style}>
            <h4>{props.bounty.firstName}</h4>
            <h4>{props.bounty.lastName}</h4>
            <h4>{props.bounty.living}</h4>
            <h4>{props.bounty.type}</h4>
        </div>
    )

}
