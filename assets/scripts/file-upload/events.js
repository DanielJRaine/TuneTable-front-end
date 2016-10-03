'use strict';
const api = require('./api.js');
const ui = require('./ui.js');

const onFileUpload = (event) => {
  event.preventDefault();
  let selectedFile = $('#file-input-upload').get(0).files[0];
  let fileReader = new FileReader();
  
  fileReader.readAsText(selectedFile);
  fileReader.onload = function(event) {
    console.log(event.target.result);
  };
};

const addHandlers = () => {
  $('#file-button-upload').on('click', onFileUpload);
};

module.exports = {
  addHandlers,
  onFileUpload,
};
