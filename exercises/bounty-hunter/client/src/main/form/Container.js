import React from "react";
import FormComponent from "./Component";
import{connect} from "react-redux";
import {bounties} from "../../redux/actions"


class FormContainer extends React.Component {
    constructor(){
        super();

        this.state ={
            inputs: {

                    firstName:"",
                    lastName:"",
                    living:true,
                    type:""
            }
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(e){
        e.persist();
        this.setState((prevState)=>{
            return {
                inputs:{
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addBounty(this.state.inputs)
        this.setState({
            inputs: {

                    firstName:"",
                    lastName:"",
                    living:true,
                    type:""
            }
        })
    }

    render(){
        return (
            <FormComponent
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                inputs={this.state.inputs}/>
        )
    }
}
export default connect(null, bounties)(FormContainer)
