'use strict';
const app = require('./../app.js');
// const template = require('lodash.template');
const _ = require('lodash');

app.tune1 = {};
app.tune2 = {};
app.tune3 = {};

let tunesArray = [app.tune1, app.tune2, app.tune3]; //placed into app.js file
let numberOfScoreViews = 0;

const displayScore = (data) => {

  if (numberOfScoreViews < 3 && data.tune) {
    numberOfScoreViews += 1;
    tunesArray[numberOfScoreViews-1] = data.tune;
  } else {
    numberOfScoreViews = 0;
    displayScore(data);
  }
  app.tune1 = tunesArray[0];
  app.tune2 = tunesArray[1];
  app.tune3 = tunesArray[2];
  // ABCJS.renderAbc(output, tunebookString, parserParams, engraverParams, renderParams)
  // see https://github.com/paulrosen/abcjs/blob/master/api.md for documentation
  let musicBoxTemplate = _.template("<svg id='score-display-<%= numberOfScoreViews %>'>I am an SVG</svg>");
  let compiledMusicBoxTemplate = musicBoxTemplate({
    numberOfScoreViews: numberOfScoreViews,
  });
  $('.music-box-'+numberOfScoreViews).append(compiledMusicBoxTemplate);

  // let stickyNoteTemplate = _.template(`
  //   <div class="container bootstrap snippet">
  //     <div class="row">
  //     	<ul class="notes">
  //             <li>
  //                 <div class="rotate-1 lazur-bg id='sticky-note-<%= numberOfScoreViews %>'">
  //                     <small>12:03:28 12-04-2014</small>
  //                     <h4>Awesome title</h4>
  //                     <p>These are some notes about tunes.</p>
  //                     <a href="#" class="text-danger pull-right"><i class="fa fa-trash-o "></i></a>
  //                 </div>
  //             </li>
  // 		</ul>
  // 	</div>
  // </div>`);
  // let compiledStickyNoteTemplate = stickyNoteTemplate({
  //   numberOfScoreViews: numberOfScoreViews,
  // });
  //
  // $('.music-box-'+numberOfScoreViews).prepend(compiledStickyNoteTemplate);
  // let scoreTemplate = _.template("<% ABCJS.renderAbc('score-display-' + numberOfScoreViews, ABCnotation, '', {staffwidth: 650}); %>");
  // let compiledScoreTemplate = scoreTemplate({
  //     ABCnotation: data.tune.ABCnotation,
  //     numberOfScoreViews: numberOfScoreViews,
  //   });
  // $('.music-box').append(compiledScoreTemplate);

  ABCJS.renderAbc('score-display-' + numberOfScoreViews, data.tune.ABCnotation, '', {staffwidth: 650});
  $('#score-display-' + numberOfScoreViews).css('visibility', 'visible');
  $('#sticky-note-' + numberOfScoreViews).css('visibility', 'visible');
  $('#sticky-text-' + numberOfScoreViews).text(data.tune.notesN);

  console.log('app is: ',app);

  $('.music-box-'+numberOfScoreViews).attr('display', 'block');
};
const failure = (error) => {
  console.error(error);
};

module.exports = {
  displayScore,
  failure,
};
