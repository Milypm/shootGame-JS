import GameScene from '../src/scenes/game';

jest.mock('../src/scenes/game');

const connectMock = jest.fn();

GameScene.mockImplementation(() => ({
  connect: connectMock,
}));

const mockedMethodImpl = jest.fn();

beforeAll(() => {
  GameScene.mockImplementation(() => ({
    mockedMethod: mockedMethodImpl,
  }));
});

beforeEach(() => {
  GameScene.mockClear();
  mockedMethodImpl.mockClear();
});

test('The game instance can be created', () => {
  const game = new GameScene();
  expect(game).toBeTruthy();
});