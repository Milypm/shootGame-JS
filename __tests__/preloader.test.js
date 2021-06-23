import PreloaderScene from '../src/scenes/preloader';

jest.mock('../src/scenes/preloader');

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