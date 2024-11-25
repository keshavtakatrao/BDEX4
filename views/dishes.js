const express = require('express');
const { getAllDishes, getDishById, getDishesByFilter, getDishesSortedByPrice } = require('../services/dishServices');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const dishes = await getAllDishes();
        res.json({ dishes });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const dish = await getDishById(id);
        if (dish) {
            res.json({ dish });
        } else {
            res.status(404).json({ message: 'Dish not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/filter', async (req, res) => {
    const { isVeg } = req.query;
    try {
        const dishes = await getDishesByFilter(isVeg);
        res.json({ dishes });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/sort-by-price', async (req, res) => {
    try {
        const dishes = await getDishesSortedByPrice();
        res.json({ dishes });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
