import {lang} from "../config/main";

const ev1 = () => {
  return {
    type: "html_button_response",
    stimulus: '<div class="happiness-text-slider">The expected value for the following wheel is +$3. Observe the possible outcomes on the next page.</div>',
    choices: [lang.prompt.continue.button]
  };
};

export default ev1;
