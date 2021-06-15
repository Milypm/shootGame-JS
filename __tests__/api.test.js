import scoreAndAPI from '../src/api';

test('if a new player/score is succesfully created in the API', () => {
  scoreAndAPI.setPlayerScore('Roberto', 800).then(data => {
    expect(data.statusText).toStrictEqual('Created');
  });
});

test('if it does not return undefined when adding a new player/score to API', () => {
  scoreAndAPI.setPlayerScore('Elena', 850).then(data => {
    expect(data).not.toBeUndefined();
  });
});

test('if it returns an Object from the API', () => {
  scoreAndAPI.setPlayerScore('Jack', 1500);
  scoreAndAPI.getScores().then(data => {
    expect(data.length).toBe(5);
  });
});