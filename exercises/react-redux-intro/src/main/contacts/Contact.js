import React from "react";

 function Contacts(props){
     return(
         <div>
             <h3>{props.contact.firstName}</h3>
             <h3>{props.contact.lastName}</h3>
                 <p>{props.contact.phone}</p>
         </div>
     )
 }

 export default Contacts
