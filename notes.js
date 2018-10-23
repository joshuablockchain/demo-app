const express = require('express');
const router = express.Router();

const simpleJsonStore = require("simple-json-store");

const store = new simpleJsonStore('./data.json', { notes: [] });

router.get('/', (req,res) =>{
    res.json(store.get('notes'));
});

router.post('/',(req,res)=>{
    const notes = store.get("notes");


    var newNote = {
        id: notes.length > 0 ? (notes[notes.length - 1].id + 1) : 1,
        title: req.body.title,
        description: req.body.description
    };

    notes.push(newNote);
    store.set("notes", notes);
});

router.get('/:id',(req,res) =>{
    const id = req.params.id;
    const notes = store.get("notes");
    // const note = notes.find(note => note.id == id);
    // let note = notes.find(function (note){
    //     return note.id == id;
    // });


    // for(let i = 0; i < notes.length; i++){
    //     if(notes[i].id == id){
    //         note = notes[i];
    //         break;
    //     }
    // }

    res.json(note);
});

router.put('/id', (req,res) =>{

    const id = req.params.id;
    const notes = store.get("notes");

    let note = {};

    for (let i = 0; i < notes.length; i++){
        if(notes[i].id == id){
            notes[i].title = req.body.title;
            notes[i].description = req.body.description;
        }
    }
});


module.exports = router;
