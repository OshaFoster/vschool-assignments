

const state ={
    timer: {
        count:0,
        min: 0,
        secs: 0
    }
}

function reducer(prevState = state, action){
    switch(action.type) {
        case "ADD_TIME"
        let count = prevState.count + 1000
        let time = new Date(count);
        let secs = time.getSeconds();
        let mins = time.getMinutes();
        return {
            count,
            minutes,
            secounds
        }



        default:
        return prevState
    }
}



//contianer
let interval =

function handleStart(){
 interval= setInterval(addTime, 1000)
}

function handlePause(){
    clearInterval()

}
