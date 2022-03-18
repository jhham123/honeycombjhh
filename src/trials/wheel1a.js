import {jsPsych} from "jspsych-react";
import {makeWheel} from "../lib/markup/makeMaskedWheel2";
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
  console.log(window.mouseview)
	window.mouseview.init()
  window.mouseview.logEvent('Trial Started')
	window.mouseview.startTracking()
	const urlParams = new URLSearchParams(window.location.search);
	const width = urlParams.get('min_width') || 12000;
	const height = urlParams.get('min_height') || 8000;
}

var mouseview_trial_end = (data)=> {
	window.mouseview.logEvent('Trial Ended')
	window.mouseview.stopTracking()
	window.mouseview.storeData()
  window.mouseview.removeAll()
	const mouseviewData = localStorage.getItem('mouseview_data')
	data.trial_tag = mouseviewData
}

const wheel1a = () => {

    let wheelHTML = makeWheel(readWheelNumbers());

    return {
      type: "html_keyboard_response",
      stimulus: wheelHTML,
      response_ends_trial: true,
      on_load: mouseview_trial_start,
      on_finish: mouseview_trial_end,
			trial_duration: 15000,
      choices: "NO_KEYS",
    }
}

;

export default wheel1a;
