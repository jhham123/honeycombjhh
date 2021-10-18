"use strict";

/**
 * Reads wheel numbers from a json file and returns the corresponding javascript object.
 */
const readWheelNumbers2 = () => {
  let nums = require("./wheelNumbers2.json");
  return nums[0];
};

export default readWheelNumbers2;
