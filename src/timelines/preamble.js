import experimentStart from "../trials/experimentStart";
import fixation from "../trials/fixation";

const preamble = {
  type: "html_keyboard_response",
  stimulus: "",
  timeline: [experimentStart(), fixation(10000)]
};

export default preamble;
