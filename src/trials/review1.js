import {lang} from "../config/main";

const review1 = (bonus) => {
  return {
    type: "html_button_response",
    stimulus: "<div class='happiness-text-slider'>Your running bonus so far is "+ bonus +"</div>",
    choices: [lang.prompt.continue.button]
  };
};

export default review1;
