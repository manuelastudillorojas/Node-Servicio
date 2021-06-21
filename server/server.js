require('./config/config');


const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(require('./router/usuario'));


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});