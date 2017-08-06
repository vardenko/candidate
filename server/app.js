"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const DAO = require("./dao");
const authors = require("./routes/authors");
const books = require("./routes/books");
const PORT = 3000;
const app = express();
const dao = new DAO();

/**
 * Middleware
 */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../public")));


/**
 * Routes
 */
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "../web/index.html"));
});

app.route("/api/authors")
    .get(authors.getAuthors)
    .post(authors.postAuthor);
app.route("/api/authors/:id")
    .get(authors.getAuthor)
    .delete(authors.deleteAuthor)
    .put(authors.updateAuthor);

app.route("/api/books")
    .get(books.getBooks)
    .post(books.postBook);
app.route("/api/books/:id")
    .get(books.getBook)
    .delete(books.deleteBook)
    .put(books.updateBook);

/**
 * Init database
 */

dao.init({}, (err, db) => {
    if (err) {
        console.error(err);
    }
    /**
     * Start app
     */
    app.listen(PORT, function()
    {
        console.log("App listening on port " + PORT + "!");
    });
});

module.exports = app;


