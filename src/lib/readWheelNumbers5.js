"use strict";

/**
 * Reads wheel numbers from a json file and returns the corresponding javascript object.
 */
const readWheelNumbers5 = () => {
  let nums = require("./wheelNumbers5.json");
  return nums[0];
};

export default readWheelNumbers5;
