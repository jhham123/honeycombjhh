import {lang} from "../config/main";

const review1 = () => {
  return {
    type: "html_button_response",
    stimulus: '<div class="happiness-text-slider">Your final bonus is -$2.</div>',
    choices: [lang.prompt.continue.button]
  };
};

export default review1;
