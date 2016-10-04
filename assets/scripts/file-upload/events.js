'use strict';
const api = require('./api.js');
const ui = require('./ui.js');
const app = require('../app.js');

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

const onDeleteTune1 = (event) => {
  event.preventDefault();
  api.deleteTune1();
};

const onDeleteTune2 = (event) => {
  event.preventDefault();
  api.deleteTune2();
};

const onDeleteTune3 = (event) => {
  event.preventDefault();
  api.deleteTune3();
};

const addHandlers = () => {
  $('#file-button-upload').on('click', onFileUpload);
  $('#delete-tune-1').on('click', onDeleteTune1);
  $('#delete-tune-2').on('click', onDeleteTune2);
  $('#delete-tune-3').on('click', onDeleteTune3);
};

module.exports = {
  addHandlers,
  onFileUpload,
  onDeleteTune1,
  onDeleteTune2,
  onDeleteTune3,
};
