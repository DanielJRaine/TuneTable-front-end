'use strict';
const getFormFields = require('../../../lib/get-form-fields.js');

const api = require('./api.js');
const ui = require('./ui.js');

const onSubmitStickyNote1 = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.submitStickyNote1(data)
    .done(ui.submitStickyNoteSuccess)
    .fail(ui.failure);
};

const onSubmitStickyNote2 = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.submitStickyNote2(data)
    .done(ui.submitStickyNoteSuccess)
    .fail(ui.failure);
};

const onSubmitStickyNote3 = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.submitStickyNote3(data)
    .done(ui.submitStickyNoteSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('#sticky-note-1').on('submit', onSubmitStickyNote1);
  $('#sticky-note-2').on('submit', onSubmitStickyNote2);
  $('#sticky-note-3').on('submit', onSubmitStickyNote3)
};

module.exports = {
  addHandlers,
  onSubmitStickyNote1,
  onSubmitStickyNote2,
  onSubmitStickyNote3,
};
