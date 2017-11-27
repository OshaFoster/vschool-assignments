module.exports = {
    port: process.env.PORT || 12000,
    db: process.env.DB,
    secret: process.env.SECRET
}

/// IN PACKGE.JSON \\\
// EX:
/*
"now": {
    "name": "now-demo",
    "alias": "now-demo",
    "env": {
        "PORT": 12000,
        "SECRET": "@secret",
        "DB": "@db"
    }
},
*/
// in root folder --> now secret add secret "whatever your secret is"
// in root folder --> now secret add db "whatever your mlab mongodb url is"
