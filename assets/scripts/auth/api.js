'use strict';
let app = require('../app.js');

const register = (data) => {
  // an ajax call to POST user info to /users
  console.log("api has registered " + data);
  debugger;
};

module.exports = {
  register,
};
