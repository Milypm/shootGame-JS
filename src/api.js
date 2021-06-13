import axios from 'axios';

const scoreAndAPI = (() => {
  const gameId = 'YzX7p2UKMPvV8zOmUwF4';
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
      (returnValue.length < 5) ? spots = returnValue.length : spots = 5;
      topScores = [...scores].sort((a,b) => b-a).slice(0, spots);

      arr.forEach((obj, index) => {
        topScores.forEach(num => {
          if (obj.score === num) { scoresIndex.push(index) }
        })
      })
      
      arr.forEach((obj, index) => {
        scoresIndex.forEach(ind => {
          if (index === ind) { topWinners.push(obj) }
        })
      })
    } catch (er) {
      console.log(er);
    }
    return topWinners;
  };

  const setPlayerScore = async (user, score) => {
    let res;

    axios({
      method: 'post',
      url: `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`,
      data: {
        'user': user,
        'score': score
      }
    })
    .then((response) => {
      console.log(response);
      res = response;
    }, (error) => {
      console.log(error);
    });
    return res;
  };

  return {  userName, getScore, nameForScore, scoreForOver, getScores, setPlayerScore };
})();

export default scoreAndAPI;