'use strict';
let app = require('../app.js');

const submitStickyNote = (data) => {
  debugger;
  return $.ajax({
    url: app.host + '/tunes/' + app.tune.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data.tune_data,
  });
};

module.exports = {
  submitStickyNote,
};
