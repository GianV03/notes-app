const mongoose = require('mongoose')

const uri = 'mongodb://localhost/notes';

mongoose.connect(uri, {
});

const connection = mongoose.connection;

connection.once('open', ()=>{
  console.log('DB connected')
})