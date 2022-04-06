/**
 * Consumes a json file and builds the corresponding javascript object (i.e. a dictionary)
 * Reads from file gambles.json, but could be set up to read from a program defined filename is
 * necessary.
 */
const readGambles = () => {
  // certain outcome, potential win, potential loss, outcome
  let gamble = require("./gambles.json");
  return gamble;
};

export default readGambles;
