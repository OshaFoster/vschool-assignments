export function addMeme(meme){
    return {
        type: "ADD_MEME",
        meme
    }
}

export function deleteMeme(index){
    return{
        type: "DELETE_MEME",
        index
    }
}


//
// import axios from "axios"
// const todosUrl ="..."


//export function loadTodos(){
// return(dispatch)=>{
//
//
//     axios.(todosUrl).then((response)=>{
//         dispatch ({
//             type: "LOAD_TODOS"
//             todos: response.data
//         })
//     })
// }
//}
// //
// export function addTodo(todo){
//     return (dispatch)=> {
//         axios.post(todosUrl, todo).then((response)=>{
//             dispatch:({
//                 type:"ADD_TODO",
//                 todo
//             })
//         })
//     }
//
// }
// export function deleteTodo(id){
//     return(dispatch)=>{
//         axios.delete(todosUrl + id).then((response)=>{
//             dispatch({
//                 type:"DELETE_TODO",
//                 id
//             })
//         })
//      .catch((err)=>{
//           cosnsole.log(err);
//})
//     }
// }
// export function editTodo(){
// return(dispatch)=>{
//     axios.put(todosUrl + id).then((response)=>{
//         dispatch({
//             type:
//         })
//     })
//
// }
//}
//
//
