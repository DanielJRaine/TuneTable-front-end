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
  $('#logout').css('visibility', 'hidden');
  $('#sticky-note-1').css('visibility', 'hidden');
  $('#sticky-note-2').css('visibility', 'hidden');
  $('#sticky-note-3').css('visibility', 'hidden');
  $('.music-box-1').hide();
  $('.music-box-2').hide();
  $('.music-box-3').hide();
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
