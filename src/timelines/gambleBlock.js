import fixation from "../trials/fixation";
import boxes from "../trials/boxes";
import {jitter} from "../lib/utils";

/*
 This timline first shows three blocks representing a certain payout (left), 
 a winning payout (top right) or a losing payout (bottom right). 

 Then, regardless of the user's choice, shows the result of the gamble.
 
 Finally, it shows a fixation point for a bounded, random interval.
*/
const gambleBlock = gamble => {
  let result =
    // the gamble outcome is recorded inside the 
    // gamble object. Gamble objects are read from an external
    // file which should be given to the program before it is run.
    // This structure allows the same set of gambles to be given to all participants
    // and allows the gamble to be choosen randomly or by hand.
    gamble.outcome === "win"
      ? boxes("gamble_outcome_win", gamble)
      : boxes("gamble_outcome_lose", gamble);
  return {
    type: "html_keyboard_response",
    stimulus: "",
    timeline: [
      // choose between gamble or sure thing
      boxes("gamble_choices", gamble),
      // see result of gamble (independent of choise)
      boxes("gamble_gambles", gamble),
      // show result of gamble
      result,
      fixation(jitter(3000, 8000))
    ]
  };
};

export default gambleBlock;
