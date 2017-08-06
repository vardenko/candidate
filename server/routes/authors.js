"use strict";

const express = require("express");
const router = express.Router();
const authors = require("../models/authors");

function getAuthors(req, res) {
    let query = authors.find({});
    query.exec((err, authors) => {
        if (err) res.send(err);
        res.json(authors);
    });
};

function postAuthor(req, res) {
    let newAuthor = new authors(req.body);
    newAuthor.save((err, Author) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({message: "Author successfully added!", authors});
        }
    });
};

function getAuthor(req, res) {
    authors.findById(req.params.id, (err, authors) => {
        if (err) res.send(err);
        res.json(authors);
    });
};

function deleteAuthor(req, res) {
    authors.remove({_id: req.params.id}, (err, result) => {
        res.json({message: "Author successfully deleted!", result});
    });
};

function updateAuthor(req, res) {
    authors.findById({_id: req.params.id}, (err, authors) => {
        if (err) res.send(err);
        Object.assign(authors, req.body).save((err, authors) => {
            if (err) res.send(err);
            res.json({message: "Author updated!", authors});
        });
    });
};

module.exports = router;
module.exports = {getAuthors, postAuthor, getAuthor, deleteAuthor,
    updateAuthor};

