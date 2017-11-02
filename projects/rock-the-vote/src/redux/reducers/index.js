const state = {
    issues: []
}

export default function reducer(prevState = state, action){
    switch(action.type){

        case "GET_LIST":
        return {
            issues: action.list
        }
        default: return prevState
    }
}
