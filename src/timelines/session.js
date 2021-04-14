import fixation from "../trials/fixation";
import boxes from "../trials/boxes";
import readGambles from "../lib/readGambles";
import {jitter, shuffle} from "../lib/utils";
import gambleBlock from "./gambleBlock";
import happinessBlock from "./happinessBlock";
import {jsPsych} from "jspsych-react";

/*
This is a meta timeline which consists of several gamble blocks. 
This is also where the gambles file is consumed (using readGambles()).

The contents of the gambles file is parsed into several gambleBlocks whcih are then shown
sequentially.

The splicing operation adds a happinessBlock after every third gambleBlock.

This structure allows the experimenter to provide an arbitrary number of gambles while
preserving the structure: gamble, gamble, gamble, happiness, gamble, gamble, gamble, happiness, ...
*/
const session = () => {
  let gambles = readGambles();
  let all_gamble_blocks = gambles.map(gamble => gambleBlock(gamble));
  all_gamble_blocks = shuffle(all_gamble_blocks);

// weave gamble block and happiness blocks together
  let increment = 3

  for (var itemIndex = 2; itemIndex < all_gamble_blocks.length; itemIndex +=increment) {
    all_gamble_blocks.splice(itemIndex, 0, happinessBlock())
    increment = Math.floor(Math.random() * (4 - 3 + 1) + 3)
  }

  return {
    type: "html_keyboard_response",
    stimulus: "",
    timeline: all_gamble_blocks
  };
};

export default session;
