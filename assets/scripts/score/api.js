'use strict';
let app = require('../app.js');

const searchScore = (data) => {
  // an ajax call to get ActiveRecord to query database
  console.log("search score data: " + data);
  return $.ajax({
    url: app.host + '/tune',
    method: 'GET',
    data: data,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

module.exports = {
  searchScore,
};
