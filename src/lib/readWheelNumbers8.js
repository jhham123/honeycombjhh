/**
 * Reads wheel numbers from a json file and returns the corresponding javascript object.
 */
const readWheelNumbers8 = () => {
  let nums = require("./wheelNumbers8.json");
  return nums[0];
};

export default readWheelNumbers8;
