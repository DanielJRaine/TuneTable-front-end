'use strict';
const api = require('./api.js');
const ui = require('./ui.js');

// const onFileUpload = function(event) {
//   event.preventDefault();
//   let data;
//   api.uploadFile(data)
//     .done(ui.uploadFileSuccess)
//     .fail(ui.failure);
// };

const addHandlers = () => {
  // $('#file-input-upload').on('submit', onFileUpload)
};

module.exports = {
  addHandlers,
  // onFileUpload,
};
