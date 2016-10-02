'use strict';
const app = require('../app.js');

const registerSuccess = (data) => {
  // app.user = data.user;
  console.log(data + " has successfully registered");
};

const loginSuccess = (data) => {
  app.user = data.user;
  console.log(data + " has successfully logged in");
};

const failure = (error) => {
  console.log(error);
};

module.exports = {
  registerSuccess,
  loginSuccess,
  failure,
};
