require('dotenv').config();
const mongoose = require('mongoose');

const ContactForm = require('./contact');
const GetAQuote = require('./quote');

async function runSeeds() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB for seeding");

    await ContactForm();
    await GetAQuote();

    await mongoose.connection.close();
    console.log("✅ Seeding complete and connection closed");
  } catch (error) {
    console.error("❌ Error running seeds:", error);
  }
}

runSeeds();
