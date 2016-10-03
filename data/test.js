'use strict';

let score = `X: 1
T: Dusky Night
S: Thompson 1777
N: From Apted Book of Country Dances
N: abc version by Robert Bley-Vroman vroman@hawaii.edu 14 October 1996
M: 6/8
L: 1/8
K:D
|: A | d2d A2G  | F>EF D2A | B2A G2F | F3   E2E  |
       A2 A B2B | c>Bc A2A | d2d e2e | f>ef d2F |
      B>cd e>fg | A>Bc d2A | B2B A>GA | D3-D2  :|
|: F/D/ | A2A  A2A | A3-A2  B/A/ | d2d d>ef | d3-d2 A |
          B>cd e>fg| A>Bc d2A | B2G A2A  | D3-D2 :|`;

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

let tune_data = {};

let parseFile = function(score) {
  let scoreArray = score.split('\n');
  tune_data.ABCnotation = score.slice(score.indexOf('|'));
  return scoreArray.forEach(matchKeys);
};
