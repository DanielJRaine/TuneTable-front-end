'use strict';
let app = require('../app.js');

let tune_data = {
  ABCnotation: '',
  user_id: '',
  tuneTitleT: '',
  composerC: '',
  originO: '',
  areaA: '',
  meterM: '',
  unitNoteLengthL: '',
  tempoQ: '',
  partsP: '',
  transcriptionZ: '',
  notesN: '',
  groupG: '',
  historyH: '',
  keyK: '',
  rhythmR: '',
};
  
const fileUpload = (fileText) => {
  parseFile(fileText);
  tune_data.user_id = app.user.id;
  // let data = tune_data
  let data = {tune_data: tune_data};
  console.log(data);
  return $.ajax({
    url: app.host + '/tunes',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data
  });
};

let parseFile = function(score) {
  let scoreArray = score.split('\n');
  tune_data.ABCnotation = score.slice(score.indexOf('|'));
  return scoreArray.forEach(matchKeys);
};

let matchKeys = function(element, index, array) {
  if(element.startsWith('T')) { tune_data.tuneTitleT = element.slice(2);}
  if(element.startsWith('C')) { tune_data.composerC = element.slice(2);}
  if(element.startsWith('O')) { tune_data.originO = element.slice(2);}
  if(element.startsWith('A')) { tune_data.areaA = element.slice(2);}
  if(element.startsWith('M')) { tune_data.meterM = element.slice(2);}
  if(element.startsWith('L')) { tune_data.unitNoteLengthL = element.slice(2);}
  if(element.startsWith('Q')) { tune_data.tempoQ = element.slice(2);}
  if(element.startsWith('P')) { tune_data.partsP = element.slice(2);}
  if(element.startsWith('Z')) { tune_data.transcriptionZ = element.slice(2);}
  if(element.startsWith('N')) { tune_data.notesN = element.slice(2);}
  if(element.startsWith('G')) { tune_data.groupG = element.slice(2);}
  if(element.startsWith('H')) { tune_data.historyH = element.slice(2);}
  if(element.startsWith('K')) { tune_data.keyK = element.slice(2);}
  if(element.startsWith('R')) { tune_data.rhythmR = element.slice(2);}
};

module.exports = {
  fileUpload,
};
