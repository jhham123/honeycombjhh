/**
 * Reads wheel numbers from a json file and returns the corresponding javascript object.
 */
const readWheelNumbers4 = () => {
  let nums = require("./wheelNumbers4.json");
  return nums[0];
};

export default readWheelNumbers4;
