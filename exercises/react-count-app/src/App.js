import React from "react";
import Tickets from "./components/Tickets"

class App extends React.Component{
    constructor(){
        super();

        this.state ={

            goldenTicketCounter: 0

        }

        this.foundTicket = this.foundTicket.bind(this);
        this.lostTicket = this.lostTicket.bind(this);

    }

    foundTicket(){
        this.setState(prevSate => {
            return{
                goldenTicketCounter: prevSate.goldenTicketCounter + 1
            }
        })
    }

    lostTicket(){
        this.setState(prevSate => {
            return{
                goldenTicketCounter: prevSate.goldenTicketCounter - 1
            }
        })
    }

    render(){
        return (
            <Tickets goldenTicketCounter={this.state.goldenTicketCounter}
                    foundTicket={this.foundTicket}
                    lostTicket={this.lostTicket}/>

                // foundTicket={()=>this.foundTicket(3)}
        )
    }

}

export default App
