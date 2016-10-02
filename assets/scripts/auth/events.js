'use strict';
const getFormFields = require('../../../lib/get-form-fields.js');

const api = require('./api.js');
const ui = require('./ui.js');

const loadRegisterForm = function(event) {
  event.preventDefault();
  $("#register-form").delay(100).fadeIn(100);
  $("#login-form").fadeOut(100);
  $('#login-form-link').removeClass('active');
  $(this).addClass('active');
};

const loadLoginForm = function(event) {
  event.preventDefault();
$("#login-form").delay(100).fadeIn(100);
$("#register-form").fadeOut(100);
$('#register-form-link').removeClass('active');
$(this).addClass('active');
};

const onRegister = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log("on register data is " + data);
  loadLoginForm(event);
  api.register(data);
    // .done(ui.registerSuccess)
    // .fail(ui.failure);
};

const addHandlers = () => {
  $(function() {
    $('#login-form-link').on('click', loadLoginForm);
    $('#register-form-link').on('click', loadRegisterForm);
  });
  $('#register-form').on('submit', onRegister);
};

module.exports = {
  addHandlers,
  onRegister,
};
