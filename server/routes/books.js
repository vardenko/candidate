"use strict";

const express = require("express");
const router = express.Router();
const books = require("../models/books");

function getBooks(req, res) {
    let query = books.find({});
    query.exec((err, books) => {
        if (err) res.send(err);
        res.json(books);
    });
};

function postBook(req, res) {
    let newBook = new books(req.body);
    newBook.save((err, Book) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({message: "Book successfully added!", books});
        }
    });
};

function getBook(req, res) {
    books.findById(req.params.id, (err, books) => {
        if (err) res.send(err);
        res.json(books);
    });
};

function deleteBook(req, res) {
    books.remove({_id: req.params.id}, (err, result) => {
        res.json({message: "Book successfully deleted!", result});
    });
};

function updateBook(req, res) {
    books.findById({_id: req.params.id}, (err, books) => {
        if (err) res.send(err);
        Object.assign(books, req.body).save((err, books) => {
            if (err) res.send(err);
            res.json({message: "Book updated!", books});
        });
    });
};

module.exports = router;
module.exports = {getBooks, postBook, getBook, deleteBook, updateBook};

