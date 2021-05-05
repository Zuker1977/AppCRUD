//dependencies
const express = require('express');
const path =require('path');
const app = express();
const port = 4000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Data base connection   
mongoose.connect('mongodb://localhost:27017/invoicesContainer?readPreference=primary&appname=MongoDB%20Compass&ssl=false', {         // LocaL
 //   mongoose.connect('mmongodb+srv://root:root@apiinvoices.4m0zq.mongodb.net/invoicesContainer?retryWrites=true&w=majority', {   // MongoBD Atlas
    useNewUrlParser: true,
    useUnifiedTopology: true });

mongoose.connection.on('error',(error)=>{
    console.log('ERROR: ' + error);
});

mongoose.connection.once('open',()=>{
    console.log('La base de datos se conecto correctamente ' );
});

// Configurar body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//static web server
app.use(express.static(path.join(__dirname,'dist')));

//route
app.use('/api/readinvoice', require('./routes/read.js') );
app.use('/api/createinvoice', require('./routes/create.js') );
app.use('/api/updateinvoice', require('./routes/update.js') );
app.use('/api/deleteinvoice', require('./routes/delete.js') );

//port
app.listen(port, () => {
  console.log('Example app listening at http://localhost:${port}')
})
