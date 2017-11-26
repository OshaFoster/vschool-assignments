const express = require("express");
const issueRoutes = express.Router();
const Issues = require("../models/issues")

issueRoutes.get("/", (req, res)=>{
    Issues.find(req.query, (err, issues)=>{
        if (err) return res.status(500).send(err)
        return res.send(issues)
    })
})

issueRoutes.post("/", (req, res)=>{
    let newIssue = new Issues(req.body);
    newIssue.save((err, savedIssue)=>{
        if (err) return res.status(500).send(err)
        return res.send(savedIssue);
    })
})

issueRoutes.delete("/:id", (req, res)=>{
    Issues.findByIdAndRemove(req.params.id, (err, deletedIssue)=>{
        if(err) return res.status(500).send(err)
        return res.send(deletedIssue)
    })
})

issueRoutes.get("/:id", (req, res)=>{
    Issues.findById(req.params.id, (err, foundIssue)=>{
        if(err)return res.status(500).send(err)
        return res.send(foundIssue)
    })

})

issueRoutes.put("/:id", (req, res)=>{
    Issues.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, foundIssue)=>{
        if(err) return res.status(500).send(err)
        return res.send(foundIssue)
    })
})


module.exports = issueRoutes
