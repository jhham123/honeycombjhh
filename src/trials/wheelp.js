
import {makeWheel} from "../lib/markup/makePracticeWheel";
import readWheelNumbers from "../lib/readWheelNumbersp";
import {lang} from "../config/main";


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

const wheelp = () => {

    let wheelHTML = makeWheel(readWheelNumbers());


    return {
      type: "html_button_response",
      stimulus: wheelHTML,
      response_ends_trial: true,
			choices: [lang.prompt.continue.button],
      on_load: () => {
				let result = getRandomInt(1,9)
				console.log(result)
        const dialp = document.querySelector('.dialp');
        dialp.classList.toggle("stopped");

				let start = document.createElement("start");
				start.innerHTML = "<p style='color:white; font-size:48px; text-align:center'>Start</p>";
				start.type = "submit";
				document.body.appendChild(start);

				let stop = document.createElement("stop")
				stop.innerHTML = "<p style='color:white; font-size:48px; text-align:center;'>Stop</p>";
				document.body.appendChild(stop)

				start.addEventListener('click', function startWheel(e){
				     document.querySelector('.dialp').classList.add("spinning");
				})

				stop.addEventListener('click', function startWheel(e){
					if (result === 1) {
						document.querySelector('.dialp').classList.add("stopping1");
					} else if (result === 2) {
						document.querySelector('.dialp').classList.add("stopping2");
					} else if (result === 3) {
						document.querySelector('.dialp').classList.add("stopping3");
					} else if (result === 4) {
						document.querySelector('.dialp').classList.add("stopping4");
					} else if (result === 5) {
						document.querySelector('.dialp').classList.add("stopping5");
					} else if (result === 6) {
						document.querySelector('.dialp').classList.add("stopping6");
					} else if (result === 7) {
						document.querySelector('.dialp').classList.add("stopping7");
					} else if (result === 8) {
						document.querySelector('.dialp').classList.add("stopping8");
					}
						 start.remove()
						 stop.remove()
						 setTimeout(() => document.getElementById("btn").style.visibility = "visible", 4000)
				});
				document.getElementById("btn").style.visibility = "hidden"
      },
			button_html: '<button class="jspsych-btn" id="btn">%choice%</button>',
      prompt: "<p style='color:white'>Use the Start and Stop buttons to activate the wheel.</button>"
    }
}



export default wheelp;
