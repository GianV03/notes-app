const mongoose = require('mongoose')
console.log(process.env.MONGODB_URI);
// se incluye la ruta en IPv4
const uri = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://127.0.0.1/notes';

mongoose.connect(uri, {
});

const connection = mongoose.connection;

connection.once('open', ()=>{
  console.log('DB connected')
});