notesCtrl = {};

notesCtrl.getNotes = (req, res) => res.json({message : 'GET Endpoint'});
notesCtrl.createNote = (req, res) => res.json({message : 'POST Endpoint'});
notesCtrl.getNote = (req, res) => res.json({id : '2432534'});
notesCtrl.updateNote = (req, res) => res.json({id : '234235234'});
notesCtrl.deleteNote = (req, res) => res.json({id : '234254234'});

module.exports = notesCtrl;