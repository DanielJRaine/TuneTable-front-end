'use strict';
const app = require('../app.js');

const displayScore = (data) => {
  console.log(data);
  console.log(app);
};

const failure = (error) => {
  console.error(error);
}
module.exports = {
  displayScore,
  failure,
};
