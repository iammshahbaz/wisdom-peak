// models/developerModel.js
const db = require('../firebaseConfig');

const developerCollection = db.collection('developers');

module.exports = developerCollection;
