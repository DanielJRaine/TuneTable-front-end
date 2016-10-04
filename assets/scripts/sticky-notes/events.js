'use strict';
const getFormFields = require('../../../lib/get-form-fields.js');

const api = require('./api.js');
const ui = require('./ui.js');

const onSubmitStickyNote = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.submitStickyNote(data)
    .done(ui.submitStickyNoteSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('#sticky-note-1').on('submit', onSubmitStickyNote);
};

module.exports = {
  addHandlers,
  onSubmitStickyNote,
};
