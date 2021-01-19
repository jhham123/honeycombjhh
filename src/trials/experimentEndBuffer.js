import {lang} from "../config/main";
import {baseStimulus} from "../lib/markup/stimuli";
import {jsPsych} from "jspsych-react";

const experimentEndBuffer = () => {

  return {
    type: "html_keyboard_response",
    stimulus: "",
    response_ends_trial: true,
  };
};

export default experimentEndBuffer;
