"use strict";

/**
 * Reads wheel numbers from a json file and returns the corresponding javascript object.
 */
const readWheelNumbers9 = () => {
  let nums = require("./wheelNumbers9.json");
  return nums[0];
};

export default readWheelNumbers9;
