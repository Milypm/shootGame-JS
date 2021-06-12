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
    let returnValue;
    try {
      const storedScores = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, { mode: 'cors' });
      returnValue = await storedScores.json();
      console.log(returnValue);
    } catch (er) {
      console.log(er);
    }
    return returnValue;
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