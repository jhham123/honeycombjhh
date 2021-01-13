import {fixationHTML} from "../lib/markup/fixation";
import {jsPsych} from "jspsych-react";

const fixation = duration => {
  let stimulus = fixationHTML;

  return {
    type: "html_keyboard_response",
    choices: jsPsych.NO_KEYS,
    stimulus: stimulus,
    response_ends_trial: false,
    trial_duration: duration
  };
};

export default fixation;
