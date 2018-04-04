import React from "react";
import glamorous from "glamorous";

function Header(){
    const HeaderDiv = glamorous.div({
        backgroundColor: "red",
        height: "200px",
        display: "flex",
        justifyContent: "center",

    });

    const HeaderH1 = glamorous.h1({
        fontSize: '84px',
        margin: "0px",

    });

    const HeaderImage = glamorous.div({
        height: '184px',
        width: "184px",
        backgroundImage: "url(https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c3f046fc34580ce265fdc17116bca02a&auto=format&fit=crop&w=1000&q=80)",
        borderRadius: "50%",
        marginLeft: "30px",

    });

    return(

        <HeaderDiv>
            <HeaderH1>Header</HeaderH1>
        <HeaderImage/>
        </HeaderDiv>
    )
}

export default Header;
