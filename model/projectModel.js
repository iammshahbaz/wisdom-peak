// models/developerModel.js
const db = require('../firebaseConfig');

const projectCollection = db.collection('projects');
module.exports = projectCollection;
