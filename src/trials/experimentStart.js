import {lang} from "../config/main";

const experimentStart = () => {
  return {
    type: "html_button_response",
    stimulus: '<div class="happiness-text-slider">You will start this experiment with a $20 bonus that may be affected by the results of the upcoming envelopes and wheel spins. Press the button to begin.</div>',
    choices: [lang.prompt.continue.button]
  };
};

export default experimentStart;
