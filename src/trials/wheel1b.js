
import {makeWheel} from "../lib/markup/makeMaskedWheel";
import readWheelNumbers from "../lib/readWheelNumbers";
import {lang} from "../config/main";


/**
 * This trial reads from a file to learn the values to show on a wheel
 * and then spins that wheel. see makeWheel() and readWheelNumbers for more information.
 *
 * The on_load function is used to run javascript after the trial has loaded. In this case,
 * it is used to start a CSS animation.
*/

const wheel1b = (bonus) => {

    let wheelHTML = makeWheel(readWheelNumbers());
    return {
      type: "html_button_response",
      stimulus: wheelHTML,
      response_ends_trial: true,
      prompt: "<p style='color:white'>Your total bonus winnings so far is "+ bonus +"</button>",
      choices: [lang.prompt.continue.button],
    }
};

export default wheel1b;
