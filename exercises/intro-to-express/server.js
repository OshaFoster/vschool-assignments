const express = require('express');
const app = express();
const bodyParser =  require("body-parser")
const uuid = require ("uuid/v4")
//const tacoRoutes = require(./routes/tacoRoutes)

app.use (bodyParser.json());


//app.use("/tacos", require(./routes/tacoRoutes))  same for burrito
app.use("/tacos", tacoRoutes)




//Old Code
//
// app.get("/tacos", (req, res)=>{
// //filter response for query Object
//     //loop thourhg tacos retunr items who match prop valuel
//     let query
//     let queryKey;
//     for(let key in req.query){
//         query = req.query[key]
//         queryKey = key
//     }
//
//     res.send(tacos)
//     (console.log(query, queryKey))
//     let filteredTaco tacos.filter((tacos)=>{
//         return taco[queryKey] ===query
//         })
//         res.send(filteredTaco)
// })
//
// app.post("/tacos", (req, res)=>{
//     let taco = req.body;
//     taco._id=uuid()
//     tacos.push(taco);
//     res.send(taco);
//
//     console.log(tacos)
//
// })
// app.delete("/tacos/:id", (req, res) =>{
//     tacos=tacos.filter((taco)=>{
//         return taco._id !== req.params.id
//     })
//     res.send({
//         meassage: "Item Removed"
//     })
//
//     //console.log(req.params)
//     //with id find data and remove it, send back confirm
// })
//
//
//
// app.put("/tacos/id", (req,res)=>{
//     // wuth the id, find object in database, replace req.body-parser
//     let newTaco =req.body
//     tacos = tacos.map((taco)=>{
//         if(taco._id===req.params.id){
//             return newTaco = Object.assign(taco, newTaco);
//         }else{
//             return taco
//         }
//     })
//     res.send(newToco)
// })
//
// app.get("/tacos/:id", (req, res)=>{
//     //find on object with matching id and res.send
//     let taco = tacos.find((taco)=>{
//         if  (taco._id === req.params.id){
//             return true;
//         }else{
//             return false;
//         }
//     })
//     res.send(taco)
// })


app.listen(8000, ()=> {
    console.log("Server is running on 8000")
});
