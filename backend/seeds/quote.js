const Quote = require('../models/Quote');

async function seedQuote() {
  await Quote.create({
    name: 'Seed Quote Client',
    company: 'Seed Company Inc.',
    email: 'quoteclient@example.com',
    phone: '555-5678',
    details: 'This is a seeded quote request for testing.'
  });
  console.log('✅ Quote seeded');
}

module.exports = seedQuote;
