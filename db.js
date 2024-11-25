const sqlite3 = require('sqlite3').verbose();
const dbInstance = new sqlite3.Database('./database.sqlite');

module.exports = { dbInstance }