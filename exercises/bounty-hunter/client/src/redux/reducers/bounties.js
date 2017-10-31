const bounties = function(prevBounty =[], action){
    let newBounty =[...prevBounty]
    switch(action.type){

        case "DELETE_BOUNTY":
        newBounty = newBounty.filter((bount)=>{
            return action.id!==bount.id
        })
        case "LOAD_BOUNTY":
        return action.bounties

        case "ADD_BOUNTY":
        newBounty.push(action.bounty)
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
