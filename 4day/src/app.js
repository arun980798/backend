const express = require("express");

const app = express();



app.use(express.json()); // this is middle ware us to get data from user it mainly user koi request ikeya surver ko to vo data lene ke leye hotaa  h

const notes = [];

app.get("/",(req,res)=>{
    res.send(notes)
})// to show 

app.post("/", (req, res) => {
  
  console.log(req.body);
  notes.push(req.body)
  res.send("note created");
});// to add notes 


app.delete("/index",(req,res)=>{
  
})


module.exports = app ;