"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const ObjectID = require('mongodb').ObjectID;
const db = require('./db');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    res.send('Hello API');
});

app.get('/artists', (req, res)=>{
    db.get().collection('artists').find().toArray((err, docs)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    });
});

app.get('/artists/:id', (req, res)=>{
    db.get().collection('artists').findOne({_id: ObjectID(req.params.id) }, (err, doc)=>{
        if (err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    });
});

app.post('/artists', (req, res)=> {
    let newArtist = {
        name: req.body.name
    };

    db.get().collection('artists').insert(newArtist, (err, result)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(newArtist);
    });
});

app.put('/artists/:id', (req, res)=>{
    db.get().collection('artists').updateOne(
        { _id: ObjectID(req.params.id) },
        { name: req.body.name },
        (err, result)=>{
            if(err){
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    );
});

app.delete('/artists/:id', (req, res)=>{
    db.get().collection('artists').deleteOne(
        { _id: ObjectID(req.params.id) },
        (err, result)=>{
            if(err){
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    );
});

db.connect('mongodb://localhost:27017/mydb', (err)=>{
    if(err){
        return console.log(err);
    }
    app.listen(5120, ()=>{
        console.log('Server is started');
    });
});