//import axios from 'axios';

const API = (() => {
  const gameId = 'YzX7p2UKMPvV8zOmUwF4';

  const userName = (name) => {
    return name;
  };

  const player = userName();

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
    const newPlayerScore = {
      'user': user,
      'score': score
    }
    try {
      const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, {
        method: 'POST',
        header: { 
          'Content-Type': 'application/json',
          'charset': 'UTF-8',
        },
        body: JSON.stringify(newPlayerScore),
        mode: 'cors',
      });
      const resultArray = await response.json();
      console.log(resultArray);
      resultArray.push(newPlayerScore);
    } catch (er) {
      console.log(er);
    }
    return resultArray;
  };

  return {  player, userName, getScores, setPlayerScore };
})();

export default API;