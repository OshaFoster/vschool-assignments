import React from "react";
import FormComponent from "./Component";
import {connect} from "react-redux";
import {memes} from "../../redux/actions";

class FormContainer extends React.Component {
    constructor(){
        super();

        this.state ={
            inputs:{
                topSentence: "",
                bottomSentence:"",
                imgUrl:""

            }
        }
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
        e.prevDefault();
        this.props.addMeme(this.state.inputs)
        this.setState({
            inputs:{
                topSentence:"",
                bottomSentence:"",
                imgUrl:""
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
 export default connect(null, memes)(FormContainer)
