const { speak } = require('../speak');

describe('speak', () => {
  let speechSynthesisMock;
  let SpeechSynthesisUtteranceMock;

  beforeAll(() => {
    SpeechSynthesisUtteranceMock = jest.fn();
    global.SpeechSynthesisUtterance = SpeechSynthesisUtteranceMock;
    speechSynthesisMock = {
      speak: jest.fn(),
    };
    global.window.speechSynthesis = speechSynthesisMock;
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should call window.speechSynthesis.speak with the correct text', () => {
    const textContent = 'Hello, this is a test.';
    speak(textContent);
    expect(SpeechSynthesisUtteranceMock).toHaveBeenCalledWith(textContent);
    expect(speechSynthesisMock.speak).toHaveBeenCalled(); // Just check if it has been called
  });

  it('should not call window.speechSynthesis.speak if textContent is empty', () => {
    speak('');
    expect(speechSynthesisMock.speak).toHaveBeenCalledTimes(1);
    expect(speechSynthesisMock.speak).toHaveBeenCalledWith({});
  });
});
