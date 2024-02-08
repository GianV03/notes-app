notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {

    const notes = await Note.find();
    res.json(notes);

};

notesCtrl.createNote = async (req, res) => {

    const newNote = new Note(req.body);

    await newNote.save();
    res.json({message : 'The Note was saved'});

};

notesCtrl.getNote = async (req, res) => {

    const note = await Note.findById(req.params.id);
    res.json(note);

}

notesCtrl.updateNote = async (req, res) => {

    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body);
    console.log(updatedNote);
    res.json({message : 'The note was updated'})
}

notesCtrl.deleteNote = async (req, res) => {
    
    await Note.findByIdAndDelete(req.params.id);
    res.json({message : 'The note was deleted'});

}


module.exports = notesCtrl;