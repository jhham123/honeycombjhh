import {jsPsych} from "jspsych-react";
import {makeWheel} from "../lib/markup/makeMaskedWheel";
import readWheelNumbers2 from "../lib/readWheelNumbers2";
import {lang} from "../config/main";
import * as mouseview from "mouseviewjs"

/**
 * This trial reads from a file to learn the values to show on a wheel
 * and then spins that wheel. see makeWheel() and readWheelNumbers for more information.
 *
 * The on_load function is used to run javascript after the trial has loaded. In this case,
 * it is used to start a CSS animation.
*/

const wheel2b = (bonus) => {

    let wheelHTML = makeWheel(readWheelNumbers2());
    return {
      type: "html_button_response",
      stimulus: wheelHTML,
      response_ends_trial: true,
      prompt: "<p style='color:white'>Your total bonus winnings so far is "+ bonus +"</button>",
      choices: [lang.prompt.continue.button]
    }
};

export default wheel2b;
