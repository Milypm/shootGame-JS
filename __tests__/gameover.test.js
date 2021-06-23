import GameOverScene from '../src/scenes/gameover';

jest.mock('../src/scenes/gameover');

const connectMock = jest.fn();

GameOverScene.mockImplementation(() => ({
  connect: connectMock,
}));

const mockedMethodImpl = jest.fn();

beforeAll(() => {
  GameOverScene.mockImplementation(() => ({
    mockedMethod: mockedMethodImpl,
  }));
});

beforeEach(() => {
  GameOverScene.mockClear();
  mockedMethodImpl.mockClear();
});

test('The gameover instance can be created', () => {
  const gameover = new GameOverScene();
  expect(gameover).toBeTruthy();
});