'use strict';
let app = require('../app.js');

const searchScore = (data) => {
  // an ajax call
  console.log("searching for score with name" + data);
};

module.exports = {
  searchScore,
};
