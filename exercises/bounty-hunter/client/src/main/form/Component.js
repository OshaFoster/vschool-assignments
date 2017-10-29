import React from "react"

function FormComponent(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input name="firstName"type="text"placeholder="First Name" value={props.inputs.firstName} onChange={props.handleChange}></input>
                <input name="LastName"type="text"placeholder="Last Name" value={props.inputs.lastName} onChange={props.handleChange}></input>
            <input name="Living"type="text"placeholder="true/false" value={props.inputs.living} onChange={props.handleChange}></input>
                <input name="type"type="text"placeholder="Sith?Jedi" value={props.inputs.type} onChange={props.handleChange}></input>
            <button type="submit">Create Bounty</button>
            </form>
        </div>
    )
}

export default FormComponent
