import experimentStart from "../trials/experimentStart";
import experimentEnd from "../trials/experimentEnd";
import fixation from "../trials/fixation";
import boxes from "../trials/boxes";

import {jitter} from "../lib/utils";

const preamble = {
  type: "html_keyboard_response",
  stimulus: "",
  timeline: [
    experimentStart(),
    boxes("gamble_choices"),
    boxes("gamble_gambles"),
    boxes("gamble_outcome_win"),
    boxes("gamble_outcome_lose"),
    fixation(jitter(3000, 8000)),
    experimentEnd()

  ]
};

export default preamble;
