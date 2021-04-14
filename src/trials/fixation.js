import {fixationHTML} from "../lib/markup/fixation";
import {jsPsych} from "jspsych-react";


/**
 * This trial shows a fixation point for a duration. The trial consumes the duration. 
 * The duration is usually set at random using the jitter() function. See gambleBlock.js for 
 * an example of this use case.
 */
const fixation = duration => {
  // fixation html JS variable (string) which contains static html to be rendered here
  let stimulus = fixationHTML;

  return {
    type: "html_keyboard_response",
    choices: jsPsych.NO_KEYS,
    stimulus: stimulus,
    response_ends_trial: false,
    trial_duration: duration,
    on_finish: (data) => {
      data.trial_tag = "fixation"
    }
  };
};

export default fixation;
