export default function memes(prevMemes =[], action){
    let newMemes =[...prevMemes]
    switch(action.type){

        case "ADD_MEME":
        newMemes.push(action.meme);
        return newMemes;
        case "DELETE_MEME":
        newMemes.splice(action.index, 1);
        return newMemes;
        default:
        return prevMemes
    }
}

// const todos = function(prevTodos =[], action){
// let newTodo =[...prevTodos]
// switch(action.type){
//
//       case"DELETE_TODO":
//      newTodos = newTodos.filter((todo)=>{
//      return id!==todo._id
//    })
//      case "LOAD_TODO":
//              return action.todos
//      case"ADD_TODO":
    //newTodo.push(action.todo)
//      return newTodos
//     default:
//     return prevTodos
// }}
