import {jsPsych} from "jspsych-react";
import {makeWheel} from "../lib/markup/makeWheel";
import readWheelNumbers from "../lib/readWheelNumbers";
import webgazer from 'webgazer'

import vars from "../App.scss"

// console.log(vars)
// webgazer.setGazeListener(function(data, elapsedTime) {
//     var xprediction = data.x;
//     var yprediction = data.y;
//     console.log("hello")
// }).begin();

const wheel = () => {

    let wheelHTML = makeWheel(readWheelNumbers());

    // const spinButton = document.getElementById('spin');
    // const dial = document.querySelector('.dial');
    // spinButton.addEventListener('click', () => {
    //   dial.classList.toggle("spinning");
    //   document.querySelector('content-container').classList.toggle('activated');
    // });

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
