import {jsPsych} from "jspsych-react";
import {makeWheel} from "../lib/markup/makeWheel";
import readWheelNumbers from "../lib/readWheelNumbers";
import {lang} from "../config/main";
import mouseview from "mouseviewjs"

/**
 * This trial reads from a file to learn the values to show on a wheel
 * and then spins that wheel. see makeWheel() and readWheelNumbers for more information.
 *
 * The on_load function is used to run javascript after the trial has loaded. In this case,
 * it is used to start a CSS animation.
*/


var mouseview_trial_start = ()=> {
  //mouseview.logEvent('Trial Started')
}
var mouseview_trial_end = ()=> {
  //mouseview.logEvent('Trial Ended')
}

const wheel = () => {

    let wheelHTML = makeWheel(readWheelNumbers());


    return {
      type: "html_button_response",
      stimulus: wheelHTML,
      response_ends_trial: true,
      prompt: "<p style='color:white'>Press on A to start the wheel and B to stop the wheel.</button>",
      on_start: mouseview_trial_start,
      on_finish: (data) => {
        data.trial_tag = "wheel"
      },
      choices: [lang.prompt.continue.button]
    }
}

window.addEventListener('keydown', function startWheel(e){
   if(e.keyCode == 65){
     document.querySelector('.dial').classList.add("spinning");
   }
   if(e.keyCode == 66){
     document.querySelector('.dial').classList.add("stopping");
   }

});

export default wheel;
