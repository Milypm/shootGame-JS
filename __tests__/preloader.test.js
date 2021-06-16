import PreloaderScene from '../src/Scenes/preloader';

jest.mock('../src/Scenes/preloader');

const connectMock = jest.fn();

PreloaderScene.mockImplementation(() => ({
  connect: connectMock,
}));

const mockedMethodImpl = jest.fn();

beforeAll(() => {
  PreloaderScene.mockImplementation(() => ({
    mockedMethod: mockedMethodImpl,
  }));
});

beforeEach(() => {
  PreloaderScene.mockClear();
  mockedMethodImpl.mockClear();
});

test('The preloader instance can be created', () => {
  const preloader = new PreloaderScene();
  expect(preloader).toBeTruthy();
});