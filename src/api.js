import axios from 'axios';
import "regenerator-runtime";

const scoreAndAPI = (() => {
  let gameId = '6LD5ueCnBulczxTvtbTL';
  let player;
  let score;

  const userName = (name) => {
    player = name;
  };

  const nameForScore = () => {
    return player;
  };

  const getScore = (curScore) => {
    score = curScore;
  };

  const scoreForOver = () => {
    return score;
  };

  const getScores = async () => {
    let spots;
    let scores = [];
    let topScores;
    let scoresIndex = [];
    let topWinners = [];

    try {
      const storedScores = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, { mode: 'cors' });
      const returnValue = await storedScores.json();
      const arr = returnValue.result;

      arr.forEach(obj => { scores.push(obj.score) });
      (arr.length < 5) ? spots = arr.length : spots = 5;
      topScores = [...scores].sort((a,b) => b-a).slice(0, spots);

      topScores.forEach((num) => {
        const index = scores.indexOf(num);
        scoresIndex.push(index);
      })

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
          'user': user,
          'score': score
        }
      });
      getVal = await returnVal.json();
    } catch (error) {
      return `Error: ${error}`;
    }
    return getVal;
  };

  return { userName, getScore, nameForScore, scoreForOver, getScores, setPlayerScore };
})();

export default scoreAndAPI;