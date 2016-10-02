'use strict';
const getFormFields = require('../../../lib/get-form-fields.js');

const api = require('./api.js');
const ui = require('./ui.js');

const loadRegisterForm = function(e) {
  $("#register-form").delay(100).fadeIn(100);
  $("#login-form").fadeOut(100);
  $('#login-form-link').removeClass('active');
  $(this).addClass('active');
  e.preventDefault();
};

const loadLoginForm = function(e) {
  $("#login-form").delay(100).fadeIn(100);
$("#register-form").fadeOut(100);
$('#register-form-link').removeClass('active');
$(this).addClass('active');
e.preventDefault();
};

const onRegister = () => {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  loadLoginForm();
};

const addHandlers = () => {
  $(function() {
    $('#login-form-link').click(loadLoginForm);
    $('#register-form-link').click(loadRegisterForm);
  });
  $('#register-form').on('submit', onRegister);
};

module.exports = {
  addHandlers,
  onRegister,
};
