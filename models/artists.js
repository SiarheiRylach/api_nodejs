const db = require('../db');
const ObjectID = require('mongodb').ObjectID;

exports.all = function (cb) {
    db.get().collection('artists').find().toArray((err, docs) => cb(err, docs));
};

exports.findById = function (id, cb) {
    db.get().collection('artists').findOne({_id: ObjectID(id) }, (err, doc) => cb(err, doc));
};

exports.create = function (newArtist, cb) {
    db.get().collection('artists').insert(newArtist, (err, result) => cb(err, result));
};

exports.update = function (id, updatedData, cb) {
    db.get().collection('artists').updateOne( { _id: ObjectID(id) }, updatedData, (err, result) => cb(err, result));
};

exports.delete = function (id, cb) {
    db.get().collection('artists').deleteOne({ _id: ObjectID(id) }, (err, result) => cb(err, result));
};