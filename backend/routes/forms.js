// const express = require('express');
// const router = express.Router();

// const Quote = require('../models/Quote');
// const Contact = require('../models/Contact');
// const { body, validationResult } = require('express-validator');

// POST /api/quote
// router.post('/quote',
//   [
//     body('name').notEmpty().withMessage('Name is required'),
//     body('email').isEmail().withMessage('Valid email is required'),
//     body('phone').notEmpty().withMessage('Phone Number is required'),
//     body('serviceType').notEmpty().withMessage('Please select a service'),
//     body('DeliveryDetails').notEmpty().withMessage('Delivery Details are required')
//   ],
  
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
    
//     try {
//       const newQuote = new Quote(req.body);
//       await newQuote.save();
//       res.status(201).json({ message: 'Quote saved successfully' });
//     } catch (err) {
//       res.status(500).json({ error: 'Failed to save quote' });
//     }
//   }
// );

// POST /api/contact
// router.post('/contact', 
//   [
//     body('name').notEmpty().withMessage('Name is required'),
//     body('email').isEmail().withMessage('Valid email is required'),
//     body('phone').optional().isMobilePhone().withMessage('Invalid phone number'),
//     body('message').notEmpty().withMessage('Message is required'),
//   ],

//   async (req, res) => {
//     // Check validation result
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       // Send errors to client if validation fails
//       return res.status(400).json({ errors: errors.array() });
//     }

//     try {
//       const newContact = new Contact(req.body);
//       await newContact.save();
//       res.status(201).json({ message: 'Contact inquiry saved' });
//     } catch (err) {
//       res.status(500).json({ error: 'Failed to save contact' });
//     }
//   }
// );

// GET /api/track/:trackingNumber (mock tracking data)
// const trackingData = {
//   'FRG12345': { status: 'Out for delivery', eta: '2025-07-22' },
//   'FRG67890': { status: 'Delivered', deliveredAt: '2025-07-18' }
// };

// router.get('/track/:trackingNumber', (req, res) => {
//   const info = trackingData[req.params.trackingNumber];
//   if (info) {
//     res.json({ trackingNumber: req.params.trackingNumber, ...info });
//   } else {
//     res.status(404).json({ error: 'Tracking number not found' });
//   }
// });

// module.exports = router;
