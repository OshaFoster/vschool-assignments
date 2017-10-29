
import axios from "axios";

const bountyUrl ="http://localhost:8001/bounty";

export function loadBounties(){
    return(dispatch)=>{

        axios(bountyUrl).then((response)=>{
            dispatch({
                type:"LOAD_BOUNTY",
                bounties: response.data
            })
        })
    }
}

export function addBounty(newBounty){
    return(dispatch)=>{
        axios.post(bountyUrl, newBounty).then((response) => {
            dispatch({
            type:"ADD_TODO",
            newTodo
        })
    })
    }
}

export function deleteBounty(id){
    return(dispatch)=>{
        axios.delete(bountyUrl + id).then((response)=>{
            dispatch({
                type:"DELETE_BOUNTY",
                id
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export function editBounty(editedBounty, id){
    return(dispatch)=>{
        axios.put(bountyUrl + id, editedBounty).then ((response)=>{
            dispatch({
                type:"EDIT_BOUNTY",

            })
        })
    }
}
