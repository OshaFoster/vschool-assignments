
const state = {
    counter: 0,
    contactList:[
        {
            firstName:"ben",
            lastName:"turner",
            phone: "888-888-9999"
        },
        {
            firstName:"bob",
            lastName:"tucker",
            phone: "888-777-9999"
        },
        {
            firstName:"bilo",
            lastName:"tinker",
            phone: "888-555-9999"
        }
    ]

}

const reducer = function(prevState = state, action){
    switch(action.type){
        case "ADD_ONE":
        return{
            ...prevState,
            counter: prevState.counter + 1

        }
        case "SUB_ONE":
        return{
            ...prevState,
            counter:prevState.counter -1

        }
        case "RESET":
        return{
            ...prevState,
            counter:0

        }
        case "REMOVE_FIRST_CONTACT":
        let newList = [...prevState.contactList]
        newList.shift();
        console.log(newList)
        return {
            ...prevState,
            contactList: newList





        }
        default:
        return {
            ...prevState
        }
    }
}

export default reducer;
