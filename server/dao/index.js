//TODO implement Data Access Layer

/**
 * Data Access Layer
 *
 * @constructor
 * @param {Object} config - database config
 */
var host ='mongodb://books_vard:books1593@ds163301.mlab.com';
var port = "63301";
var name = 'books';
var mongoose = require('mongoose');

function DAO(config) {
    mongoose.connect(host + ':' +port+ '/' +name);   
}

/**
 * Create database instance and load init data
 * @param {Object} data - init database data
 * @param {Function} callback - two params err, callback result
 * @returns {void}
 */
DAO.prototype.init = function (data, callback) {
    //TODO create instance and load data
    callback && callback();

};

/**
 * Clear database
 * @param {Function} callback - two params err, callback result
 * @returns {void}
 */
DAO.prototype.clear = function(callback) {
    //TODO clear database
    callback && callback();

};
module.exports = mongoose.connection;
module.exports = DAO;

