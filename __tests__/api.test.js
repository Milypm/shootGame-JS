/* eslint no-irregular-whitespace: [0] */

import mockedAxios from 'axios';
import { getScores } from '../src/api';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve([]),
}));

test('if returned value is correct', async () => {
  const json = await getScores();
  expect(typeof json).toBe('string');
});

test('if fetch has been called one time', async () => {
  expect(fetch).toHaveBeenCalledTimes(1);
});

test('if a new player/score is succesfully created in the API', async () => {
  const data = {
    result: 'Leaderboard score created correctly.',
  };
  mockedAxios.post.mockResolvedValueOnce(data);
});