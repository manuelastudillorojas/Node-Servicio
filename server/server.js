require('./config/config');


const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

//Configuración Global de Rutas
app.use(require('./router/index'));


mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
}, (err, res) => {

    if (err) throw err;

    console.log('Base de datos ONLINE');

});


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT + ' y ' + process.env.MONGODB_URI);
});