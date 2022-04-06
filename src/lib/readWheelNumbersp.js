/**
 * Reads wheel numbers from a json file and returns the corresponding javascript object.
 */
const readWheelNumbersp = () => {
  let nums = require("./wheelNumbersp.json");
  return nums[0];
};

export default readWheelNumbersp;
