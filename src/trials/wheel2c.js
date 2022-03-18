import {jsPsych} from "jspsych-react";
import {makeWheel} from "../lib/markup/makeWheel";
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

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const wheel2c = (result) => {

    let wheelHTML = makeWheel(readWheelNumbers2());
		return {
      type: "html_button_response",
      stimulus: wheelHTML,
      response_ends_trial: true,
      on_load: () => {
				console.log(result)
        const dial = document.querySelector('.dial');
        dial.classList.toggle("spinning");

				let stop = document.createElement("stop")
				stop.innerHTML = "<p style='color:white; font-size:48px; text-align:center;'>Stop</p>";
				document.body.appendChild(stop)

				stop.addEventListener('click', function startWheel(e){
					if (result === 1) {
						document.querySelector('.dial').classList.add("stopping1");
					} else if (result === 2) {
						document.querySelector('.dial').classList.add("stopping2");
					} else if (result === 3) {
						document.querySelector('.dial').classList.add("stopping3");
					} else if (result === 4) {
						document.querySelector('.dial').classList.add("stopping4");
					} else if (result === 5) {
						document.querySelector('.dial').classList.add("stopping5");
					} else if (result === 6) {
						document.querySelector('.dial').classList.add("stopping6");
					} else if (result === 7) {
						document.querySelector('.dial').classList.add("stopping7");
					} else if (result === 8) {
						document.querySelector('.dial').classList.add("stopping8");
					}
						 stop.remove()
						 setTimeout(() => document.getElementById("btn").style.visibility = "visible", 4000)
				});
				document.getElementById("btn").style.visibility = "hidden"
      },
			button_html: '<button class="jspsych-btn" id="btn">%choice%</button>',
      prompt: "<p style='color:white'>Use the Stop button to stop the wheel.</button>",
      choices: [lang.prompt.continue.button],
			on_finish: (data) => {
		    data.trial_tag = "2"
			}
    }
};

export default wheel2c;
