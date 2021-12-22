import {lang} from "../config/main";

const review2 = () => {
  return {
    type: "html_button_response",
    stimulus: '<div class="happiness-text-slider">You won $6 on the second wheel.</div>',
    choices: [lang.prompt.continue.button]
  };
};

export default review2;
