'use strict';
const app = require('../app.js');

const registerSuccess = (data) => {
  app.user = data.user;
  console.log(app.user.name + " has successfully registered");
};

const failure = (error) => {
  console.log(error);
};

module.exports = {
  registerSuccess,
  failure,
};
