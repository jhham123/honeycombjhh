import {lang} from "../config/main";

const experimentStart = () => {
  return {
    type: "html_button_response",
    stimulus: "",
    choices: [lang.prompt.continue.button]
  };
};

export default experimentStart;
