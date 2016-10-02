'use strict';
let app = require('../app.js');

const register = (data) => {
  // an ajax call to POST user info to /users
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: data,
  });
};

module.exports = {
  register,
};
