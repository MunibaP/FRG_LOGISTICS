const express = require('express');
const router = express.Router();

const contactRoutes = require('./contact');
const quoteRoutes = require('./quote');
const trackingRoutes = require('./tracking');

// Mount each router on its path
router.use('/contact', contactRoutes);
router.use('/quote', quoteRoutes);
router.use('/track', trackingRoutes);

module.exports = router;
