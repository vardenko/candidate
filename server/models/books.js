let mongoose = require("mongoose");
let BookSchema = new mongoose.Schema(
	{
		name: {type: String, required: true},
		publishing: {type: String, required: true},
		ebook: {type: String, required: true},
		year: {type: Number, required: true},
		isbn: {type: String, required: true},
		pages: {type: Number, required: true},
		author: {type: String, required: true},
		_id: {type: String}
	},
	{
		versionKey: false
	}
);

module.exports = mongoose.model("books", BookSchema);