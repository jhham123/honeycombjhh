import {lang} from "../config/main";

const review1 = () => {
  return {
    type: "html_button_response",
    stimulus: '<div class="happiness-text-slider">You lost $2 on the first wheel.</div>',
    choices: [lang.prompt.continue.button]
  };
};

export default review1;
