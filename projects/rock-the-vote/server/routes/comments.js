const express = require("express");
const commentRoutes = express.Router();
const Comments = require("../models/comments")

commentRoutes.get("/", (req, res)=>{
    Comments.find(req.query, (err, comment)=>{
        if(err) return res.status(500).send(err)
        return res.send(comment)

    })
})

commentRoutes.post("/", (req, res)=>{
    let newComment = new Comments(req.body);
    newComment.save((err, savedComment)=>{
        if (err) return res.status(500).send(err)
        return res.send(savedComment)
    })
})

commentRoutes.delete("/:id", (req, res)=>{
    Comments.findByIdAndRemove(req.params.id, (err, deletedComment)=>{
        if (err) return res.status(500).send(err)
        return res.send(deletedComment)
    })
})

commentRoutes.get("/:id", (req, res)=>{
    Comments.findById(req.params.id, (err, foundComment)=>{
        if(err)return res.status(500).send(err)
        return res.send(foundComment)
    })

})
commentRoutes.put("/:id", (req, res)=>{
    Issues.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, foundComment)=>{
        if(err) return res.status(500).send(err)
        return res.send(foundComment)
    })
})

module.exports = commentRoutes
