'use strict';
let app = require('../app.js');

const submitStickyNote1 = (tune_data) => {
  let data = tune_data;
  
  return $.ajax({
    url: app.host + '/tunes/' + app.tune1.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const submitStickyNote2 = (tune_data) => {
  let data = tune_data;
  
  return $.ajax({
    url: app.host + '/tunes/' + app.tune2.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const submitStickyNote3 = (tune_data) => {
  let data = tune_data;
  
  return $.ajax({
    url: app.host + '/tunes/' + app.tune3.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

module.exports = {
  submitStickyNote1,
  submitStickyNote2,
  submitStickyNote3,
};
