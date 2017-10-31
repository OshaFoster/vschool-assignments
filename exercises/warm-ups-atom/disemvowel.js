

function disemvowel(str){
    let output ={
        str:"",
        vowels: ""
    }
    let vowels ="aeiou"
    
    for(let i =0; i <str.length; i ++){
        if(vowels.includes(str[i])){
            output.vowels += str[i];
        }else if (str[i].match){
            continue
        }else{
            output.str += str[i]
        }
    }
    return output
}

    console.log(disemvowel("Pickle Rick"))

//
// //greedy aproach
//
//
//
// Input:
// "Pickle Rick!"
//
// Output:
// {
//   str: "pckrck!",
//   vowels: "iei"
// }
//
//
