/**
 * Reads wheel numbers from a json file and returns the corresponding javascript object.
 */
const readWheelNumbers10 = () => {
  let nums = require("./wheelNumbers10.json");
  return nums[0];
};

export default readWheelNumbers10;
