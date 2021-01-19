import {jsPsych} from "jspsych-react";

const largeWhiteText = (string, duration) => {
  if (duration === null) {
    return {
      type: "html_keyboard_response",
      choices: jsPsych.NO_KEYS,
      stimulus: `<div class="large-white-text">${string}</div>`,
      response_ends_trial: false,
      on_finish: (data) => {
        data.trial_tag = "white_text"
      }
    }
  }
  return {
    type: "html_keyboard_response",
    choices: jsPsych.NO_KEYS,
    stimulus: `<div class="large-white-text">${string}</div>`,
    response_ends_trial: false,
    trial_duration: duration,
    on_finish: (data) => {
      data.trial_tag = "white_text"
    }
  }

};

export default largeWhiteText;
