const express = require('express');
const router = express.Router();

const Quote = require('../models/Quote');
const { body, validationResult } = require('express-validator');

// POST /api/quote
router.post('/quote',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('phone').notEmpty().withMessage('Phone Number is required'),
    body('serviceType').notEmpty().withMessage('Please select a service'),
    body('DeliveryDetails').notEmpty().withMessage('Delivery Details are required')
  ],
  
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    try {
      const newQuote = new Quote(req.body);
      await newQuote.save();
      res.status(201).json({ message: 'Quote saved successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to save quote' });
    }
  }
);