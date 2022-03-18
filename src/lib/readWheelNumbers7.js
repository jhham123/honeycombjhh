"use strict";

/**
 * Reads wheel numbers from a json file and returns the corresponding javascript object.
 */
const readWheelNumbers7 = () => {
  let nums = require("./wheelNumbers7.json");
  return nums[0];
};

export default readWheelNumbers7;
