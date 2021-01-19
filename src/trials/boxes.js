import {numberBoxes} from "../lib/markup/numberBoxes";
import {jsPsych} from "jspsych-react";
import total_earnings from "../lib/summaryStatistics";

jsPsych.data.addProperties({earnings: 0})

const boxes = (type, gamble) => {
  let left = null;
  let rightTop = null;
  let rightBot = null;
  let duration = 0;

  if (type === "gamble_choices") {
    left = gamble.certain_outcome;
    rightTop = gamble.potential_win;
    rightBot = gamble.potential_loss;
    duration = 3000;

    let boxesHTML = numberBoxes(left, rightTop, rightBot);

    return {
      name: type,
      type: "html_keyboard_response",
      choices: ["f", "j"],
      stimulus: boxesHTML,
      response_ends_trial: true,
      trial_duration: duration,
      on_finish: (data) => {
        if (data.key_press === 70) {
          data.earnings = parseFloat(gamble.certain_outcome)
          console.log(parseFloat(gamble.certain_outcome))
        }
        else if (data.key_press === 74) {
          if (gamble.outcome === "win") {
            data.earnings = parseFloat(gamble.potential_win)
            console.log(parseFloat(gamble.potential_win))
          }
          else if (gamble.outcome === "lose") {
            data.earnings = parseFloat(gamble.potential_loss)
            console.log(parseFloat(gamble.potential_loss))
          }
        }
        console.log(data.earnings)
        console.log(data)
        // console.log(jsPsych.data.get().csv)
      }
    };

  } else if (type === "gamble_gambles") {
    left = null;
    rightTop = gamble.potential_win;
    rightBot = gamble.potential_loss;
    duration = 6000;


  } else if (type === "gamble_outcome_win") {
    left = null;
    rightTop = gamble.potential_win;
    rightBot = null;
    duration = 1000;


  } else if (type === "gamble_outcome_lose") {
    left = null;
    rightTop = null;
    rightBot = gamble.potential_loss;
    duration = 1000;

  }

  let boxesHTML = numberBoxes(left, rightTop, rightBot);

  return {
    name: type,
    type: "html_keyboard_response",
    choices: jsPsych.NO_KEYS,
    stimulus: boxesHTML,
    response_ends_trial: false,
    trial_duration: duration
  };

};

export default boxes;
