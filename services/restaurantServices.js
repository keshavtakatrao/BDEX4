const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database.sqlite');

const getAllRestaurants = () => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM restaurants', [], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

const getRestaurantById = (id) => {
    return new Promise((resolve, reject) => {
        db.get('SELECT * FROM restaurants WHERE id = ?', [id], (err, row) => {
            if (err) reject(err);
            resolve(row);
        });
    });
};

const getRestaurantsByCuisine = (cuisine) => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM restaurants WHERE cuisine = ?', [cuisine], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

const getRestaurantsByFilter = (isVeg, hasOutdoorSeating, isLuxury) => {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT * FROM restaurants WHERE 
            (isVeg = ? OR ? IS NULL) AND 
            (hasOutdoorSeating = ? OR ? IS NULL) AND 
            (isLuxury = ? OR ? IS NULL)`,
            [isVeg, isVeg, hasOutdoorSeating, hasOutdoorSeating, isLuxury, isLuxury],
            (err, rows) => {
                if (err) reject(err);
                resolve(rows);
            }
        );
    });
};

const getRestaurantsSortedByRating = () => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM restaurants ORDER BY rating DESC', [], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

module.exports = {
    getAllRestaurants,
    getRestaurantById,
    getRestaurantsByCuisine,
    getRestaurantsByFilter,
    getRestaurantsSortedByRating,
};
