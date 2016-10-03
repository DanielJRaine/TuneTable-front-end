'use strict';
const app = require('../app.js');
// const template = require('lodash.template');
const _ = require('lodash');

const displayScore = (data) => {
  app.tune = data.tune;
  // ABCJS.renderAbc(output, tunebookString, parserParams, engraverParams, renderParams)
  // see https://github.com/paulrosen/abcjs/blob/master/api.md for documentation

  let template = _.template("<% ABCJS.renderAbc('score-display-1', ABCnotation, '', {staffwidth: 650}); %>");
  
    // ABCJS.renderAbc('score-display-1', data.tune.ABCnotation, '', {staffwidth: 650});
    let compiled_html = template({
        ABCnotation: data.tune.ABCnotation,
      });
      
  $('.music-box').append(compiled_html);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  displayScore,
  failure,
};
