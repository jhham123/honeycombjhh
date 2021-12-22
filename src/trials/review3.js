import {lang} from "../config/main";

const review3 = () => {
  return {
    type: "html_button_response",
    stimulus: '<div class="happiness-text-slider">You lost $8 on the third wheel.</div>',
    choices: [lang.prompt.continue.button]
  };
};

export default review3;
