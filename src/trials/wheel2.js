import {jsPsych} from "jspsych-react";
import {makeWheel2} from "../lib/markup/makeWheel2";
import readWheelNumbers2 from "../lib/readWheelNumbers2";
import {lang} from "../config/main";

/**
 * This trial reads from a file to learn the values to show on a wheel
 * and then spins that wheel. see makeWheel() and readWheelNumbers for more information.
 *
 * The on_load function is used to run javascript after the trial has loaded. In this case,
 * it is used to start a CSS animation.
 */
const wheel2 = () => {

    let wheelHTML = makeWheel2(readWheelNumbers2());


    return {
      type: "html_button_response",
      stimulus: wheelHTML,
      response_ends_trial: true,
      prompt: "<p style='color:white'>Press on A to start the wheel and B to stop the wheel.</button>",

      on_finish: (data) => {
        data.trial_tag = "wheel"
      },
      choices: [lang.prompt.continue.button]
    }
}
export default wheel2;
