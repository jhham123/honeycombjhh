import {jsPsych} from "jspsych-react";
import {makeWheel} from "../lib/markup/makeWheel";
import readWheelNumbers from "../lib/readWheelNumbers";


/**
 * This trial reads from a file to learn the values to show on a wheel
 * and then spins that wheel. see makeWheel() and readWheelNumbers for more information. 
 * 
 * The on_load function is used to run javascript after the trial has loaded. In this case,
 * it is used to start a CSS animation.
 */
const wheel = () => {

    let wheelHTML = makeWheel(readWheelNumbers());


    return {
      type: "html_keyboard_response",
      choices: jsPsych.NO_KEYS,
      stimulus: wheelHTML,
      response_ends_trial: false,
      on_load: () => {
        const dial = document.querySelector('.dial');
        dial.classList.toggle("spinning");
      },
      on_finish: (data) => {
        data.trial_tag = "wheel"
      }
  }
}

export default wheel;
