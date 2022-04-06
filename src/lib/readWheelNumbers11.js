/**
 * Reads wheel numbers from a json file and returns the corresponding javascript object.
 */
const readWheelNumbers11 = () => {
  let nums = require("./wheelNumbers11.json");
  return nums[0];
};

export default readWheelNumbers11;
