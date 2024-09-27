// models/developerModel.js
const db = require('../firebaseConfig');

const towerCollection = db.collection('tower');
module.exports = towerCollection;
