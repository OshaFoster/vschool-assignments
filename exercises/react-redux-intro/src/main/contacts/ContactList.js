import React from "react";
import {connect} from "react-redux";
import Contact from "./Contact";
import {removeFirstContact} from "../../redux/action/index.js"


function ContactList(props){
    console.log(props) //everything in state
    return (
        <div>
            <button onClick={props.removeFirstContact}>Remove Contact</button>
            {props.contactList.map((contact, i)=>{
                return<Contact key={contact.firstName +1} contact={contact}/>

            })}
        </div>

    )
}
const mapStateToProps =(state)=>{
    return state
}
export default connect(mapStateToProps, {removeFirstContact})(ContactList);
