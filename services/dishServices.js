const { dbInstance } = require('../db');



const getAllDishes = () => {
    return new Promise((resolve, reject) => {
        dbInstance.all('SELECT * FROM dishes', [], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

const getDishById = (id) => {
    return new Promise((resolve, reject) => {
        dbInstance.get('SELECT * FROM dishes WHERE id = ?', [id], (err, row) => {
            if (err) reject(err);
            resolve(row);
        });
    });
};

const getDishesByFilter = (isVeg) => {
    return new Promise((resolve, reject) => {
        dbInstance.all(
            'SELECT * FROM dishes WHERE isVeg = ? OR ? IS NULL',
            [isVeg, isVeg],
            (err, rows) => {
                if (err) reject(err);
                resolve(rows);
            }
        );
    });
};

const getDishesSortedByPrice = () => {
    return new Promise((resolve, reject) => {
        dbInstance.all('SELECT * FROM dishes ORDER BY price ASC', [], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

module.exports = {
    getAllDishes,
    getDishById,
    getDishesByFilter,
    getDishesSortedByPrice,
};
