//Actions//

import axios from "axios";
const url ="http://localhost:8088/issues";

export function getList(){
    return(dispatch) =>{
        axios.get(url).then(response =>{
            dispatch({
                type: "GET_LIST",
                list: response.data
            })
        }).catch(err=>{
            console.log(err)
        })

    }
}
