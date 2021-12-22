import {jsPsych} from "jspsych-react";
import {makeWheel} from "../lib/markup/makeWheel";
import readWheelNumbers3 from "../lib/readWheelNumbers3";
import {lang} from "../config/main";
import * as mouseview from "mouseviewjs"

/**
 * This trial reads from a file to learn the values to show on a wheel
 * and then spins that wheel. see makeWheel() and readWheelNumbers for more information.
 *
 * The on_load function is used to run javascript after the trial has loaded. In this case,
 * it is used to start a CSS animation.
*/

const wheel2b = () => {

    let wheelHTML = makeWheel(readWheelNumbers3());


    return {
      type: "html_button_response",
      stimulus: wheelHTML,
      response_ends_trial: true,
      on_load: () => {
        const dial = document.querySelector('.dial');
        dial.classList.toggle("spinning");
      },
      prompt: "<p style='color:white'>Press on B to stop the wheel.</button>",
      choices: [lang.prompt.continue.button]
    }
}

document.addEventListener('keydown', function startWheel(e){
   if(e.keyCode == 66){
     document.querySelector('.dial').classList.add("stopping");
   }

});

export default wheel2b;
