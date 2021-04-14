import {jsPsych} from "jspsych-react";

/**
 * This trial is used to show large white text for a fixed duration. It
 * consumes the string it should show as well as the duration. It relies on the 
 * CSS definition of the class "large-white-text" which is given in App.css
 * 
 * If no duration is given, the duration is controlled by the caller. This case 
 * is not used, but could be useful. 
 */
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
