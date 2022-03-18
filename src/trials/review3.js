import {lang} from "../config/main";

const review1 = () => {
  return {
    type: "html_button_response",
    stimulus: '<div class="happiness-text-slider">Your running bonus so far is -$1.</div>',
    choices: [lang.prompt.continue.button]
  };
};

export default review1;
