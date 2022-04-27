
import {makeWheel} from "../lib/markup/makeMaskedWheel2";
import readWheelNumbers5 from "../lib/readWheelNumbers5";
import * as mouseview from "mouseviewjs"

/**
 * This trial reads from a file to learn the values to show on a wheel
 * and then spins that wheel. see makeWheel() and readWheelNumbers for more information.
 *
 * The on_load function is used to run javascript after the trial has loaded. In this case,
 * it is used to start a CSS animation.
*/

var mouseview_trial_start = ()=> {
  console.log(window.mouseview)
  window.mouseview.init()
  window.mouseview.logEvent('TrialStarted')
	window.mouseview.startTracking()


}
function warningMessage(data) {
	window.mouseview.logEvent('SizeChange')
	// data.end_experiment_fail_msg = "EXPERIMENT FAILED due to monitor resizing."
	alert("EXPERIMENT FAILED due to monitor resizing.")
	data.break_experiment = undefined
}
window.onresize = warningMessage;

var mouseview_trial_end = (data)=> {
	window.mouseview.logEvent('TrialEnded')
	window.mouseview.stopTracking()
	window.mouseview.storeData()
  window.mouseview.removeAll()
	const mouseviewData = localStorage.getItem('mouseview_data')
	data.trial_tag = mouseviewData
}

console.log(mouseview)

const wheel5a = () => {

    let wheelHTML = makeWheel(readWheelNumbers5());

    return {
			type: "html_keyboard_response",
      stimulus: wheelHTML,
      response_ends_trial: true,
      on_load: mouseview_trial_start,
      on_finish: mouseview_trial_end,
			trial_duration: 10000,
      choices: "NO_KEYS",
    }
}

;

export default wheel5a;
