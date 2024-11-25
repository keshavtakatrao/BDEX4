const express = require('express');
const { getAllRestaurants, getRestaurantById, getRestaurantsByCuisine, getRestaurantsByFilter, getRestaurantsSortedByRating } = require('../services/restaurantServices');
// const restaurantServices = require('../services/restaurantServices');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const restaurants = await getAllRestaurants();
        res.json({ restaurants });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const restaurant = await getRestaurantById(id);
        if (restaurant) {
            res.json({ restaurant });
        } else {
            res.status(404).json({ message: 'Restaurant not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/cuisine/:cuisine', async (req, res) => {
    const cuisine = req.params.cuisine;
    try {
        const restaurants = await getRestaurantsByCuisine(cuisine);
        res.json({ restaurants });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/filter', async (req, res) => {
    const { isVeg, hasOutdoorSeating, isLuxury } = req.query;
    try {
        const restaurants = await getRestaurantsByFilter(
            isVeg,
            hasOutdoorSeating,
            isLuxury
        );
        res.json({ restaurants });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/sort-by-rating', async (req, res) => {
    try {
        const restaurants = await getRestaurantsSortedByRating();
        res.json({ restaurants });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
