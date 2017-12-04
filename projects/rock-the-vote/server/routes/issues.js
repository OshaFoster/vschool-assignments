const express = require("express");
const issueRoutes = express.Router();
const Issue = require("../models/issues")

issueRoutes.get("/", (req, res)=>{
    Issue.find(req.query, (err, issues)=>{
        if (err) return res.status(500).send(err)
        return res.send(allIssues)
    })
})

issueRoutes.post("/", (req, res)=>{
    let newIssue = new Issue(req.body);
    newIssue.save((err, savedIssue)=>{
        if (err) return res.status(500).send(err)
        return res.send(savedIssue);
    })
})

issueRoutes.delete("/:id", (req, res)=>{
    Issue.findByIdAndRemove(req.params.id, (err, deletedIssue)=>{
        if(err) return res.status(500).send(err)
        return res.send(deletedIssue)
    })
})

issueRoutes.get("/:id", (req, res)=>{
    Issue.findById(req.params.id, (err, foundIssue)=>{
        if(err)return res.status(500).send(err)
        return res.send(foundIssue)
    })

})

issueRoutes.put("/:id", (req, res)=>{
    Issue.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, foundIssue)=>{
        if(err) return res.status(500).send(err)
        return res.send(foundIssue)
    })
})


module.exports = issueRoutes
