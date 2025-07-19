const express = require('express');
const router = express.Router();

const Quote = require('../models/Quote');
const Contact = require('../models/Contact');

// POST /api/quote
router.post('/quote', async (req, res) => {
  try {
    const newQuote = new Quote(req.body);
    await newQuote.save();
    res.status(201).json({ message: 'Quote request saved' });
  } catch (err) {
    res.status(500).json({ error: 'Error saving quote' });
  }
});

// POST /api/contact
router.post('/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: 'Contact inquiry saved' });
  } catch (err) {
    res.status(500).json({ error: 'Error saving contact' });
  }
});

// GET /api/track/:trackingNumber (mock tracking data)
const trackingData = {
  'FRG12345': { status: 'Out for delivery', eta: '2025-07-22' },
  'FRG67890': { status: 'Delivered', deliveredAt: '2025-07-18' }
};

router.get('/track/:trackingNumber', (req, res) => {
  const info = trackingData[req.params.trackingNumber];
  if (info) {
    res.json({ trackingNumber: req.params.trackingNumber, ...info });
  } else {
    res.status(404).json({ error: 'Tracking number not found' });
  }
});

module.exports = router;
