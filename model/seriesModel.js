// models/developerModel.js
const db = require('../firebaseConfig');

const seriesCollection = db.collection('series');

module.exports = seriesCollection;
