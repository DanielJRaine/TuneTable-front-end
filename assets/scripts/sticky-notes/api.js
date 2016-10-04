'use strict';
let app = require('../app.js');

const submitStickyNote1 = (data) => {
  console.log('data1 is: ');
  console.log(data);
  debugger;
  
  return $.ajax({
    url: app.host + '/tunes/' + app.tune1.tune_data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data.tune_data,
  });
};

const submitStickyNote2 = (data) => {
  console.log('data1 is: ');
  console.log(data);
  debugger;
  
  return $.ajax({
    url: app.host + '/tunes/' + app.tune2.tune_data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data.tune_data,
  });
};

const submitStickyNote3 = (data) => {
  console.log('data1 is: ');
  console.log(data);
  debugger;
  
  return $.ajax({
    url: app.host + '/tunes/' + app.tune3.tune_data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data.tune_data,
  });
};

module.exports = {
  submitStickyNote1,
  submitStickyNote2,
  submitStickyNote3,
};
