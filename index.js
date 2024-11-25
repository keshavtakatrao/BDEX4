const express = require('express');
const bodyParser = require('body-parser');
const restaurantRoutes = require('./views/restaurant');
const dishesRoutes = require('./views/dishes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/restaurants', restaurantRoutes);
app.use('/dishes', dishesRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
