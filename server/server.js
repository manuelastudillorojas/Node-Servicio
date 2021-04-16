require('./config/config');


const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/usuario', function(req, res) {

    res.json('get Usuario');

});

app.post('/usuario', function(req, res) {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'Nombre es necesario',
        });
    } else {
        res.json({
            persona: body

        });
    }

});
app.put('/usuario', function(req, res) {
    res.json('get Usuario');

});
app.delete('/usuario', function(req, res) {
    res.json('get Usuario');

});


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});