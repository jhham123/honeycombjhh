import {jsPsych} from "jspsych-react";
import {makeWheel} from "../lib/markup/makeWheel";
import readWheelNumbers from "../lib/readWheelNumbers";
import {lang} from "../config/main";
import * as mouseview from "mouseviewjs"

/**
 * This trial reads from a file to learn the values to show on a wheel
 * and then spins that wheel. see makeWheel() and readWheelNumbers for more information.
 *
 * The on_load function is used to run javascript after the trial has loaded. In this case,
 * it is used to start a CSS animation.
*/

var mouseview_trial_start = ()=> {
  debugger
  console.log(window.mouseview)
  window.mouseview.init()
  window.mouseview.logEvent('Trial Started')
}
var mouseview_trial_end = ()=> {
  window.mouseview.logEvent('Trial Ended')
  window.mouseview.removeAll()
}

const wheel1a = () => {

    let wheelHTML = makeWheel(readWheelNumbers());


    return {
      type: "html_button_response",
      stimulus: wheelHTML,
      response_ends_trial: true,
      prompt: "<p style='color:white'>Press on continue when you are ready.</button>",
      on_start: mouseview_trial_start,
      on_finish: mouseview_trial_end,
      choices: [lang.prompt.continue.button]
    }
}

;

export default wheel1a;
