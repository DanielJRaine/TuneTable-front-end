'use strict';
let app = require('../app.js');

const fileUpload = (fileText) => {
  console.log(fileText);
  let data = {tune_data: {name: "MacArthur Road", ABCnotation: fileText}};
  return $.ajax({
    url: app.host + '/tunes',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data
  });
};

module.exports = {
  fileUpload,
};
