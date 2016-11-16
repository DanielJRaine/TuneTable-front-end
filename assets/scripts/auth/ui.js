'use strict';
const app = require('../app.js');

const registerSuccess = (data) => {
  // app.user = data.user;
  console.log(data + " has successfully registered");
};

const loginSuccess = (data) => {
  app.user = data.user;
  console.log(app.user + " has successfully logged in");
  $('.auth-panel').hide();
  $('.search-box').attr('style', 'visibility: visible;');
};

const logoutSuccess = () => {
  console.log("Successful logout");
  $('.auth-panel').show();
  $('.search-box').hide();
};

const failure = (error) => {
  console.log(error);
};

module.exports = {
  registerSuccess,
  loginSuccess,
  logoutSuccess,
  failure,
};
