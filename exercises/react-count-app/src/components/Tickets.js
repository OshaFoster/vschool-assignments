import React from "react";


function Tickets(props){
    return (
        <div style={{border:"1px solid gold", width:"450px", textAlign:"center"}}>
            <img src="http://www.resumesetc.com.au/wp-content/uploads/2017/01/12345-1.png"></img>
        <h1>Number of Golden Tickets: <span style={{color:"gold"}}>{props.goldenTicketCounter}</span></h1>
    <button onClick={props.foundTicket} >Ticket Found</button>
<button onClick={props.lostTicket} >Ticket Lost</button>


        </div>
    )
}




export default Tickets
