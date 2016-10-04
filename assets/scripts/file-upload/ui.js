'use strict';

const fileUploadSuccess = (data) => {
  // console.log("successfully uploaded file: " + data);
};

const failure = (error) => {
  console.log(error);
};

module.exports = {
  fileUploadSuccess,
  failure,
};
