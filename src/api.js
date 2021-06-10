const API = (() => {
  const setGame = async () => {
    let gameID;
    const game = { 'name': 'Space Shooter' };
    try {
      const responseGame = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
        method: 'POST',
        header: { 'Content-Type': 'application/json', },
        body: JSON.stringify(game),
        mode: 'cors',
      });
      const returnValue = await responseGame.json();
      returnValue.split(' ');
      gameID = returnValue[3];
      console.log(returnValue);
    } catch {
      console.log('error posting game');
    }
    return gameID;
  }

  const gameIdentifier = setGame();

  const getScores = async () => {
    let returnValue;
    try {
      const storedScores = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameIdentifier}/scores`, { mode: 'cors' });
      returnValue = await storedScores.json();
      console.log(returnValue);
    } catch {
      console.log('error getting scores data');
    }
    return returnValue;
  }

  const setPlayer = async (user, score) => {
    const newPlayer = {
      'user': user,
      'score': score
    }
    try {
      const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameIdentifier}/scores`, {
        method: 'POST',
        header: { 'Content-Type': 'application/json', },
        body: JSON.stringify(newPlayer),
        mode: 'cors',
      });
      const resultArray = await response.json();
      resultArray.push(newPlayer);
    } catch {
      console.log('error posting a new score');
    }
    return newPlayer;
  }

  return { setGame, getScores, setPlayer };
})();

export default API;
