import fixation from "../trials/fixation";
import boxes from "../trials/boxes";
import readGambles from "../lib/readGambles";
import {jitter} from "../lib/utils";

const gambleBlock = gamble => {
  let result =
    gamble.outcome === "win"
      ? boxes("gamble_outcome_win", gamble)
      : boxes("gamble_outcome_lose", gamble);
  return {
    type: "html_keyboard_response",
    stimulus: "",
    timeline: [
      boxes("gamble_choices", gamble),
      boxes("gamble_gambles", gamble),
      result,
      fixation(jitter(3000, 8000))
    ]
  };
};

export default gambleBlock;
