import {numberBoxes} from "../lib/markup/numberBoxes";

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
    choices: ["f", "j"],
    stimulus: boxesHTML,
    response_ends_trial: false,
    trial_duration: duration
    // on_finish: (data) => data.code = code
  };
};

export default boxes;
