require('dotenv').config();
const mongoose = require('mongoose');
const Tracking = require('../models/Tracking');

const trackingData = {
  'FRG12345': { status: 'Out for delivery', estimatedDelivery: new Date('2025-07-22') },
  'FRG67890': { status: 'Delivered', estimatedDelivery: new Date('2025-07-18') },
};

const seedData = Object.entries(trackingData).map(([trackingNumber, info]) => ({
  trackingNumber,
  ...info,
}));

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('✅ Connected to MongoDB');

    await Tracking.deleteMany(); // clear existing data
    await Tracking.insertMany(seedData);
    console.log('✅ Tracking data seeded');

    await mongoose.disconnect();
    console.log('✅ Disconnected from MongoDB');
  } catch (err) {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
  }
}

seed();
