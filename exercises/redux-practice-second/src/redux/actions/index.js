//actions
import axios from "axios";

const url = "https://api.vschool.io/osha/todo";

export function getList(){
    return(dispatch) =>{
        axios.get(url).then(response=> {
            dispatch({
                type: "GET_LIST",
                list:response.data
            })
        }).catch(err =>{
            console.log(err);
        })
    }
}
// export function deleteTodo(){
//     return(dispatch)=>{
//         axios.get(url).then(response=>{
//             dispatch({
//
//             })
//
//         })
//     }
//
// }
