"use strict";
const readGambles = () => {
  // certain outcome, potential win, potential loss, outcome
  let gamble = require("./gambles.json");
  return gamble;
};

export default readGambles;
