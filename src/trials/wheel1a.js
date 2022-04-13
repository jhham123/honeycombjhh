import {makeWheel} from "../lib/markup/makeMaskedWheel2";
import readWheelNumbers from "../lib/readWheelNumbers";
import * as mouseview from "mouseviewjs"

/**
 * This trial reads from a file to learn the values to show on a wheel
 * and then spins that wheel. see makeWheel() and readWheelNumbers for more information.
 *
 * The on_load function is used to run javascript after the trial has loaded. In this case,
 * it is used to start a CSS animation.
*/
let wheelHTML = makeWheel(readWheelNumbers());
var mouseview_trial_start = ()=> {
  console.log(window.mouseview)
	window.mouseview.init()
  window.mouseview.logEvent('TrialStarted')
	window.mouseview.startTracking()}
	// document.getElementById("warning").style.visibility = "hidden"

// 	function warningMessage() {
// 		// window.mouseview.stopTracking()
// 		window.mouseview.logEvent('SizeChange')
// 		window.mouseview.removeAll()
// 		document.getElementById("warning").style.visibility = "visible"
// 		window.onresize = null
// 		// var hide = document.getElementsByClassName('container')
// 		// container.setAttribute('visibility', 'hidden')
// 	}
// 	window.onresize = warningMessage;
// }
//
var mouseview_trial_end = (data)=> {
	window.mouseview.logEvent('TrialEnded')
	window.mouseview.stopTracking()
	window.mouseview.storeData()
  window.mouseview.removeAll()
	const mouseviewData = localStorage.getItem('mouseview_data')
	data.trial_tag = mouseviewData
}

console.log(mouseview)

const wheel1a = () => {

    return {
      type: "html_keyboard_response",
      stimulus: wheelHTML,
			prompt: '<div class="happiness-text-slider" id="warning" visibility="hidden">Return to full size to continue.</div>',
      response_ends_trial: true,
      on_load: mouseview_trial_start,
      on_finish: mouseview_trial_end,
			trial_duration: 30000,
      choices: "NO_KEYS",
    }
}

;

export default wheel1a;
