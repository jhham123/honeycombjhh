"use strict";

/**
 * Reads wheel numbers from a json file and returns the corresponding javascript object.
 */
const readWheelNumbers = () => {
  let nums = require("./wheelNumbers.json");
  return nums[0];
};

export default readWheelNumbers;
