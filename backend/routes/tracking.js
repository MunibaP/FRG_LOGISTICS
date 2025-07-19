const express = require('express');
const router = express.Router();

const { body, validationResult } = require('express-validator');

// GET /api/track/:trackingNumber (mock tracking data)
const trackingData = {
  'FRG12345': { status: 'Out for delivery', eta: '2025-07-22' },
  'FRG67890': { status: 'Delivered', deliveredAt: '2025-07-18' }
};

// Validate trackingNumber param: must start with "FRG" + 5 digits
router.get('/:trackingNumber',
    [
        param('trackingNumber')
        .matches(/^FRG\d{5}$/)
        .withMessage('Tracking number must start with "FRG" followed by 5 digits'),
    ],

    (req, res) => {
        // Check validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    
        const info = trackingData[req.params.trackingNumber];
        if (info) {
            res.json({ trackingNumber: req.params.trackingNumber, ...info });
        } else {
            res.status(404).json({ error: 'Tracking number not found' });
        }
    }
);

module.exports = router;