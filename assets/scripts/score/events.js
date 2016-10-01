'use strict';
const getFormFields = require('../../../lib/get-form-fields.js');

const api = require('./api.js');
const ui = require('./ui.js');

const onSearchScore = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.searchScore(data)
    .done(ui.displayScore)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('#search').on('submit', onSearchScore);
};

module.exports = {
  addHandlers,
  onSearchScore,
};
