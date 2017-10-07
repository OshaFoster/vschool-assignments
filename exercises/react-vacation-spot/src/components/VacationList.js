import React from "react";
import VacationComponent from "./VacationComponent";
import spotsArray from "../vacationSpots.json"

function VacationList(){
    return spotsArray.map(function(spot, i){

        return(<VacationComponent place={spot.place}
                                    price={spot.price}
                                    timeToGo={spot.timeToGo}
                                    photo={spot.photo}
                                    key={i}/>)
})
}

{/*spot={spot} in components props.spot.place*/ }

export default VacationList
