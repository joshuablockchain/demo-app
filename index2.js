var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var PORT = 3300;



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.get('/',(req,res) =>{
   // res.json({ foo: "bar"});


    res.json({ hello: "world"});
});
const noteRouter = require("./server/routes/notes");
app.use('/notes',noteRouter);

app.listen(PORT, () =>{
    console.log(`Listening to ${PORT}...`);
});