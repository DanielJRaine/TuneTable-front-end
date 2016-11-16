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
  $('#logout').css('visibility', 'visible');
  $('#file-input').css('visibility', 'visible');
};

const logoutSuccess = () => {
  console.log("Successful logout");
  $('.auth-panel').show();
  $('.search-box').hide();
  $('#file-input').css('visibility', 'hidden');
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
