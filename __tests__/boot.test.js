import BootScene from '../src/Scenes/boot';

jest.mock('../src/Scenes/boot');

const connectMock = jest.fn();

BootScene.mockImplementation(() => ({
  connect: connectMock,
}));

const mockedMethodImpl = jest.fn();

beforeAll(() => {
  BootScene.mockImplementation(() => ({
    mockedMethod: mockedMethodImpl,
  }));
});

beforeEach(() => {
  BootScene.mockClear();
  mockedMethodImpl.mockClear();
});

test('The boot instance can be created', () => {
  const boot = new BootScene();
  expect(boot).toBeTruthy();
});