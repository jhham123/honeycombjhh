import {makeWheel} from "../lib/markup/makeWheel";
import readWheelNumbers5 from "../lib/readWheelNumbers5";
import {lang} from "../config/main";


/**
 * This trial reads from a file to learn the values to show on a wheel
 * and then spins that wheel. see makeWheel() and readWheelNumbers for more information.
 *
 * The on_load function is used to run javascript after the trial has loaded. In this case,
 * it is used to start a CSS animation.
*/



const wheel5c = (result) => {

    let wheelHTML = makeWheel(readWheelNumbers5());
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
		    data.trial_tag = "5"
			}
    }
};

export default wheel5c;
