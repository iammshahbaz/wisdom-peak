require('dotenv').config();

const admin = require('firebase-admin');


const serviceAccount = JSON.parse(process.env.GOOGLE_CLOUD_SERVICE_ACCOUNT_KEY);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.DATABASE_URL
});

const db = admin.firestore();

module.exports = db;
