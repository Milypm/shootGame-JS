import MenuScene from '../src/scenes/menu';

jest.mock('../src/scenes/menu');

const connectMock = jest.fn();

MenuScene.mockImplementation(() => ({
  connect: connectMock,
}));

const mockedMethodImpl = jest.fn();

beforeAll(() => {
  MenuScene.mockImplementation(() => ({
    mockedMethod: mockedMethodImpl,
  }));
});

beforeEach(() => {
  MenuScene.mockClear();
  mockedMethodImpl.mockClear();
});

test('The menu instance can be created', () => {
  const menu = new MenuScene();
  expect(menu).toBeTruthy();
});