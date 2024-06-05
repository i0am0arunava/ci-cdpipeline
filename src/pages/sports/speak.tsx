export const speak = (textContent: string | undefined) => {
    if (textContent === '') {
      return; // or throw an error, depending on your requirements
    }
    const synth = window.speechSynthesis;
    const voice = new SpeechSynthesisUtterance(textContent);
    synth.speak(voice);
  };