"use strict";

/**
 * Reads wheel numbers from a json file and returns the corresponding javascript object.
 */
const readWheelNumbers12 = () => {
  let nums = require("./wheelNumbers12.json");
  return nums[0];
};

export default readWheelNumbers12;
