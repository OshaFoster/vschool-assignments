import React from "react";
import glamorous from "glamorous";

export default function Poem(props){

    const LineButton = glamorous.button({
        color: "#fdfdfd",
        background: "#676767",
        borderColor: "#898985",
        fontSize:"18px",
        marginBottom: "20px"
    });

    return (

        <LineButton>{props.poem}</LineButton>
    )
}
