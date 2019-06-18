'use strict'
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));// sevier apartir de um submit do form, transforma em obj
app.use(bodyParser.json())//se vier um json dentro do body, transformando o json em objeto



app.get('/teste',(req, res) => res.send('Ok'));// retornar ok
app.listen(9000, () => console.log('Rodando na porta 9000'));