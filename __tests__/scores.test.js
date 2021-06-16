import ScoresScene from '../src/Scenes/scores';

jest.mock('../src/Scenes/scores');

const connectMock = jest.fn();

ScoresScene.mockImplementation(() => ({
  connect: connectMock,
}));

const mockedMethodImpl = jest.fn();

beforeAll(() => {
  ScoresScene.mockImplementation(() => ({
    mockedMethod: mockedMethodImpl,
  }));
});

beforeEach(() => {
  ScoresScene.mockClear();
  mockedMethodImpl.mockClear();
});

test('The scores instance can be created', () => {
  const scores = new ScoresScene();
  expect(scores).toBeTruthy();
});