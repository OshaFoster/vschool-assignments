import React from "react";
import glamorous from "glamorous";

function Header(){
    const HeaderDiv = glamorous.div({
        backgroundColor: "grey",
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
        backgroundImage: "url(https://images.unsplash.com/photo-1520262389826-d559a9aca921?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e480accd20ff34c5d760e31d143c1861&auto=format&fit=crop&w=2468&q=80https://images.unsplash.com/photo-1520262389826-d559a9aca921?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e480accd20ff34c5d760e31d143c1861&auto=format&fit=crop&w=2468&q=80)",
        borderRadius: "50%",
        marginLeft: "30px"

    });

    return(

        <HeaderDiv>
            <HeaderH1>Poet</HeaderH1>
        <HeaderImage/>
        </HeaderDiv>
    )
}

export default Header;
