let waveHello = function(req, res, next){
    console.log("Hello, wave")
    next()

}
module.exports = {
    waveHello}
    
