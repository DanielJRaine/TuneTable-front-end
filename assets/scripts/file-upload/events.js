'use strict';
const api = require('./api.js');
const ui = require('./ui.js');

const onFileUpload = (event) => {
  event.preventDefault();
  let selectedFile = $('#file-input-upload').get(0).files[0];
  let fileReader = new FileReader();
  
  fileReader.readAsText(selectedFile);
  fileReader.onload = function(event) {
    let fileText = event.target.result;
    api.fileUpload(fileText)
      .done(ui.fileUploadSuccess)
      .fail(ui.failure);
  };
};

const addHandlers = () => {
  $('#file-button-upload').on('click', onFileUpload);
};

module.exports = {
  addHandlers,
  onFileUpload,
};
