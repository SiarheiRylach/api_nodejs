"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const artistsController = require('./controllers/artists');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    res.send('Hello API');
});

app.get('/artists', artistsController.all);

app.get('/artists/:id', artistsController.findById);

app.post('/artists', artistsController.create);

app.put('/artists/:id', artistsController.update);

app.delete('/artists/:id', artistsController.delete);

db.connect('mongodb://localhost:27017/mydb', (err)=>{
    if(err){
        return console.log(err);
    }
    app.listen(5120, ()=>{
        console.log('Server is started');
    });
});