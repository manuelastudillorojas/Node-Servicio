require('./config/config');


const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.use(require('./router/usuario'));

mongoose.connect('mongodb+srv://Admin:SKJ7qDHhbTH8ttl3@cluster0.a7v8q.mongodb.net/cafe?retryWrites=true&w=majority', (err, res) => {

    if (err) throw err;

    console.log('Base de datos ONLINE');

});


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT + 'y' + process.env.urlDB);
});