import React from "react"
import Service from "./views/Service"
import {Switch, Route} from "react-router-dom";

function ServicesComponent(props){
    const styles ={

    }
    let searchById = props.searchById;
    return(
        <div>
        <div className="">
            <div style={styles}>
                {props.genLinks()}

            </div>
        </div>
        <div className="pageHeight">

            <Switch>
                <Route path="/service/:id" render={(props)=>{

                        return(
                            <Service searchById={searchById}{...props}/>
                        )
                    }}/>
             </Switch>

             {/* <Switch>
                 <Route path="/service/:id" component={Service}/>
              </Switch> */}
        </div>
        </div>
    )
}

export default ServicesComponent
