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

const login = (data) => {
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: data,
  });
};

const logout = () => {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  });
};

module.exports = {
  register,
  login,
  logout,
};
