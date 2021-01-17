import fixation from "../trials/fixation";
import boxes from "../trials/boxes";
import readGambles from "../lib/readGambles";
import {jitter, shuffle} from "../lib/utils";
import gambleBlock from "./gambleBlock";
import happinessBlock from "./happinessBlock";

const session = () => {
  let gambles = readGambles();
  let all_gambleBlocks = gambles.map(gamble => gambleBlock(gamble));
  all_gambleBlocks = shuffle(all_gambleBlocks);

// weave gamble block and happiness blocks together
  let increment = 3

  for (var itemIndex = 2; itemIndex < all_gambleBlocks.length; itemIndex +=increment) {
    all_gambleBlocks.splice(itemIndex, 0, happinessBlock())
    increment = Math.floor(Math.random() * (4 - 3 + 1) + 3)
  }
  console.log(all_gambleBlocks);

  return {
    type: "html_keyboard_response",
    stimulus: "",
    timeline: all_gambleBlocks
  };
};

export default session;
