const express = require('express');
const router = express.Router();

const Contact = require('../models/Contact');
const { body, validationResult } = require('express-validator');

// POST /api/contact
router.post('/contact', 
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('phone').optional().isMobilePhone().withMessage('Invalid phone number'),
    body('message').notEmpty().withMessage('Message is required'),
  ],

  async (req, res) => {
    // Check validation result
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Send errors to client if validation fails
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newContact = new Contact(req.body);
      await newContact.save();
      res.status(201).json({ message: 'Contact inquiry saved' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to save contact' });
    }
  }
);