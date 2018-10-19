const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());

let dogs = [];


app.get('/:index', (req,res) => res.status(200).json({dog:dogs[req.params.index]}));

app.get('/', (req,res) => res.status(200).json({dogs: dogs}));
app.post('/', (req,res) => {

dogs.push(req.body.dogName);
res.status(200).json({status: `Added ${req.body.dogName}!`});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

});





app.get('/', (req, res) => {
    res.send('Hello World!');
});
/*
app.post('/',(req,res) => {
   const name = req.body.name;
   res.send(`Hello ${name[4]}!`);
});

app.get('/', (req, res) => {
    res.getElementById("DEMO-APP").innerHTML = name;
});
*/

app.listen(port, () => {
    console.log('Running at port 3000!');
});
