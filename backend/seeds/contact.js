const Contact = require('../models/Contact');

async function seedContact() {
  await Contact.create({
    name: 'Seed Contact User',
    email: 'contactuser@example.com',
    phone: '555-1234',
    message: 'This is a seeded contact message for testing.'
  });
  console.log('✅ Contact seeded');
}

module.exports = seedContact;
