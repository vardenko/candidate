let mongoose = require("mongoose");
let AuthorSchema = new mongoose.Schema(
	{	
		email: {type: String, required: true},
		firstName: {type: String, required: true},
		secondName: {type: String, required: true},
		birthDate: {type: Number, required: true},
		_id: {type: String}
	},
	{
		versionKey: false
	}
);

module.exports = mongoose.model("authors", AuthorSchema);