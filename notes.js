const express = require('express');
const router = express.Router();

var notes = [];
let idCtr = 0;
router.get('/', (req,res) =>{
    res.json(notes);
});

router.post('/',(req,res)=>{
    idCtr += 1;
    var newNote = {
        id: idCtr,
        title: req.body.title,
        description: req.body.description
    };
    notes.push(newNote);
    res.json(notes);
});

router.get('/:id',(req,res) =>{
    const id = req.params.id;
    let note = notes.find(function (note){
        return note.id == id;
    });


    // for(let i = 0; i < notes.length; i++){
    //     if(notes[i].id == id){
    //         note = notes[i];
    //         break;
    //     }
    // }

    res.json(note);
});

module.exports = router;
