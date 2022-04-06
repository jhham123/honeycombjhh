/**
 * Reads wheel numbers from a json file and returns the corresponding javascript object.
 */
const readWheelNumbers3 = () => {
  let nums = require("./wheelNumbers3.json");
  return nums[0];
};

export default readWheelNumbers3;
