notesCtrl = {};

const Category = require('../models/Category');
const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {

    const notes = await Note.find().populate('category');
    res.json(notes);

};

notesCtrl.createNote = async (req, res) => {
    
    const { title, content, author, categoryId, date } = req.body

    const category = await Category.findById(categoryId);

    const newNote = new Note({
        title,
        content,
        author,
        category,
        date
    })

    await newNote.save();
    res.json({message : 'The Note was saved'});

};

notesCtrl.getNote = async (req, res) => {

    const note = await Note.findById(req.params.id);
    res.json(note);

}

notesCtrl.updateNote = async (req, res) => {

      const { title, content, author, categoryId, date } = req.body;

      const category = await Category.findById(categoryId);

      const updatedNote = {
          title,
          content,
          author,
          category,
          date
      }
  

    await Note.findByIdAndUpdate(req.params.id, updatedNote);
    res.json({message : 'The note was updated'})
}

notesCtrl.deleteNote = async (req, res) => {
    
    await Note.findByIdAndDelete(req.params.id);
    res.json({message : 'The note was deleted'});

}


module.exports = notesCtrl;