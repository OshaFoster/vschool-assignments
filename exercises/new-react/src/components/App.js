import React from "react";


function Header(){
    return (
        <div>
            Hello! Would like to shop for <a href="bigcats.com">big cats</a>
        </div>
    )
}


function Title (){
    return (
        <h1>Great Title</h1>;
    )
}


function App (){
    return (
        <div>
        <Header />
        <Title />
        </div>

    )
}

export default App;
