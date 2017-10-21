const redux = require("redux")

const state = {

    counter: 0,
    contact: ["darn","sam","ben", "sue", "bob"]

}
function addName(name) {
    return {
        type: "ADD_NAME",
        name: name
    }
}
function removeName(){

    return{
        type: "REMOVE_NAME",

    }
}
function custome(num) {
    return {
        value: num, type: "CUSTOME"
        // properties for reducer to use
    }
}
function addOne(){
    return{
        type:"ADD_ONE"  //set to name of function

    }
}

function subOne(){
    return{
        type:"SUB_ONE"
    }
}

function reset() {
    return {type: "RESET"}
}

function reducer(prevState = state, action) {
    switch (action.type) {

        case "CUSTOME":
            return {
                contact: prevState.contact,
                counter: prevState.counter + action.value
            }
        case "ADD_NAME":
            return {
                contact: [...prevState.contact, action.name],
                counter: prevState.counter
            }
        case "REMOVE_NAME":
        //make copie, remove first item from copy then return copy as state
        let newList = [...prevState.contact]
        newList.shift();

            return{
                contact: newList,
                counter: prevState.counter
            }
        case "ADD_ONE":
            return {
                contact: prevState.contact,
                counter: prevState.counter + 3
            }
        case "SUB_ONE":
            return {
                contact: prevState.contact,
                counter: prevState.counter - 1
            }
        case "RESET":
            return {
                contact: prevState.contact,
                counter: 0
            }

        default:
            return prevState;

    }
}

const store = redux.createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addOne())
store.dispatch(subOne())
store.dispatch(custome(34))
store.dispatch(reset())
//store.dispatch(addName("Ben"))
store.dispatch(removeName())
store.dispatch(removeName())
store.dispatch(removeName())
store.dispatch(removeName())
