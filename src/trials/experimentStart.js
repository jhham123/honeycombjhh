import {lang} from "../config/main";

const experimentStart = () => {
  return {
    type: "html_button_response",
    stimulus: '<div class="happiness-text-slider">Press the button to begin the experiment</div>',
    choices: [lang.prompt.continue.button]
  };
};

export default experimentStart;
