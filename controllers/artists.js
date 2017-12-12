"use strict";

const Artists = require('../models/artists');

exports.all = function (req, res){
    Artists.all((err, docs)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    });
};

exports.findById = function (req, res) {
    Artists.findById(req.params.id, (err, doc)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    });
};

exports.create = function (req, res) {
    let newArtist = {
        name: req.body.name
    };

    Artists.create(newArtist, (err, result)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(newArtist);
    });
};

exports.update = function (req, res) {
    let updatedData = {
        name: req.body.name
    };

    Artists.update(req.params.id, updatedData, (err, result)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });
};

exports.delete = function (req, res) {
    Artists.delete(req.params.id, (err, result)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });
};