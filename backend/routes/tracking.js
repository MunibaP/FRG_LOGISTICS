const express = require('express');
const router = express.Router();

const Tracking =  require('../models/Tracking');
const { param, validationResult } = require('express-validator');
const mongoose = require('mongoose');

// Validate trackingNumber param: must start with "FRG" + 5 digits
router.get('/:trackingNumber',
    [
        param('trackingNumber')
        .matches(/^FRG\d{5}$/)
        .withMessage('Tracking number must start with "FRG" followed by 5 digits'),
    ],

    async (req, res) => {
        // Check validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const trackingInfo = await Tracking.findOne({ trackingNumber: req.params.trackingNumber });

            if (!trackingInfo) {
                return res.status(404).json({ error: 'Tracking number not found' });
            }

            res.json(trackingInfo);
        } catch (err) {
            console.error('Tracking route error:', err);
            res.status(500).json({error: 'Server error'});
        }
    }
);

module.exports = router;