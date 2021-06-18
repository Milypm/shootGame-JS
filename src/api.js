/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

import axios from 'axios';
import 'regenerator-runtime';

const gameId = 'hfi36B8c4IfZyPuuj73T';
let player;
let score;

const userName = (name) => {
  player = name;
};

const nameForScore = () => player;

const getScore = (curScore) => {
  score = curScore;
};

const scoreForOver = () => score;

const getScores = async () => {
  let spots;
  const scores = [];
  let topScores;
  const scoresIndex = [];
  const topWinners = [];
  try {
    const storedScores = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, { mode: 'cors' });
    const returnValue = await storedScores.json();
    const arr = returnValue.result;
    arr.forEach((obj) => { scores.push(obj.score); });
    spots = (arr.length < 5) ? arr.length : 5;
    topScores = [...scores].sort((a, b) => b - a).slice(0, spots);
    topScores.forEach((num) => {
      const index = scores.indexOf(num);
      scoresIndex.push(index);
    });
    for (let i = 0; i < 5; i++) {
      const topIndex = scoresIndex[i];
      topWinners.push(arr[topIndex]);
    }
  } catch (error) {
    return `Error: ${error}`;
  }
  return topWinners;
};

const setPlayerScore = async (user, score) => {
  let getVal;
  try {
    const returnVal = await axios({
      method: 'post',
      url: `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`,
      data: {
        user,
        score,
      },
    });
    getVal = await returnVal.json();
  } catch (error) {
    return `Error: ${error}`;
  }
  return getVal;
};

export {
  userName, getScore, nameForScore, scoreForOver, getScores, setPlayerScore
};