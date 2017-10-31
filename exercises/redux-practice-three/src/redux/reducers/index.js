//reducer

const state = {
    todos:[]
}

export default function reducer(prevstate = state, action){
    switch(action.type){

        case "GET_LIST":{
            return {
                todos: action.list
            }
        }
    }

}
