/**
 * Reads wheel numbers from a json file and returns the corresponding javascript object.
 */
const readWheelNumbers6 = () => {
  let nums = require("./wheelNumbers6.json");
  return nums[0];
};

export default readWheelNumbers6;
