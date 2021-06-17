import CommandsScene from '../src/scenes/commands';

jest.mock('../src/scenes/commands');

const connectMock = jest.fn();

CommandsScene.mockImplementation(() => ({
  connect: connectMock,
}));

const mockedMethodImpl = jest.fn();

beforeAll(() => {
  CommandsScene.mockImplementation(() => ({
    mockedMethod: mockedMethodImpl,
  }));
});

beforeEach(() => {
  CommandsScene.mockClear();
  mockedMethodImpl.mockClear();
});

test('The commands instance can be created', () => {
  const commands = new CommandsScene();
  expect(commands).toBeTruthy();
});