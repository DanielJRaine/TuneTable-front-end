'use strict';
const app = require('../app.js');

const submitStickyNoteSuccess = (data) => {
  console.log('successfully submitted sticky note with data: ');
  console.log(data);
};

const failure = (error) => {
  console.log(error);
};

module.exports = {
  submitStickyNoteSuccess,
  failure,
};
