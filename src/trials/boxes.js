import {numberBoxes} from "../lib/markup/numberBoxes";

const boxes = type => {
  let left = true;
  let rightTop = true;
  let rightBot = true;
  let duration = 0;
  if (type === "gamble_choices") {
    left = true;
    rightTop = true;
    rightBot = true;
    duration = 3000;
  } else if (type === "gamble_gamble") {
    left = false;
    rightTop = true;
    rightBot = true;
    duration = 6000;
  } else if (type === "gamble_outcome") {
    left = false;
    rightTop = true;
    rightBot = false;
    duration = 1000;
  }

  let boxesHTML = numberBoxes(left, rightTop, rightBot);
  console.log(boxesHTML);

  return {
    type: "html_keyboard_response",
    choices: ["f", "j"],
    stimulus: boxesHTML,
    response_ends_trial: false,
    trial_duration: duration
  };
};

export default boxes;
