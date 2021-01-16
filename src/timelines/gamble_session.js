import fixation from "../trials/fixation";
import boxes from "../trials/boxes";
import read_gambles from "../lib/read_gambles";
import {jitter, shuffle} from "../lib/utils";
import gamble_block from "./gamble_block";

const gamble_session = () => {
  let gambles = read_gambles();
  let all_gamble_blocks = gambles.map(gamble => gamble_block(gamble));
  all_gamble_blocks = shuffle(all_gamble_blocks);

  return {
    type: "html_keyboard_response",
    stimulus: "",
    timeline: all_gamble_blocks
  };
};

export default gamble_session;
