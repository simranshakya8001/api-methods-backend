const express = require("express");
const app = express();

app.use(express.json());

const notes = [];

// naya note banana
app.post("/notes", (req, res) => {
    console.log("Post aayi hai :", req.body)
    notes.push(req.body);
    res.status(201).json({
        message: "note created successfully"
    });
});

// saare notes dekhna
app.get("/notes", (req, res) => {
    console.log("GET request aayi");
    res.status(200).json({
        message: "notes fetched successfully",
        notes: notes
    });
});
app.delete("/notes/:index", (req, res) => {
    const index = req.params.index
    delete notes[index]
    res.status(200).json({
        message: "Note deleted successfully"
    })
})
app.patch("/notes/:index", (req, res) => {
    console.log("app.js load hui, patch route yahan hai");
    const index = req.params.index
    const description = req.body.description
    notes[index].description = description
    res.status(200).json({
        message: "Description update successfully"
    })
})

module.exports = app;