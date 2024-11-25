const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const dbPath = path.resolve(__dirname, 'database.sqlite'); // Ensure the path is correct
const dbInstance = new sqlite3.Database(dbPath);

console.log('Database Path:', dbPath); // Debugging log
module.exports = { dbInstance };
