let explosion = function(req, res, next){
    req.expolsion = "Boom!!!!"
    next()
}


modules.exports = (
    explosion
)
