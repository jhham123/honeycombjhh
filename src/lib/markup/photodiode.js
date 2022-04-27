<<<<<<< HEAD
import {AT_HOME, IS_ELECTRON} from "../../config/main";
import {eventCodes} from "../../config/trigger";
=======
import { config } from "../../config/main";
import { eventCodes } from "../../config/trigger";
>>>>>>> honeycomb/main
import $ from "jquery";

// conditionally load electron and psiturk based on MTURK config variable
let ipcRenderer = false;
<<<<<<< HEAD
if (IS_ELECTRON) {
=======
if (config.USE_ELECTRON) {
>>>>>>> honeycomb/main
  const electron = window.require("electron");
  ipcRenderer = electron.ipcRenderer;
}

// Relies on styling in App.css, generate PD spot
const photodiodeGhostBox = () => {
<<<<<<< HEAD
  const class_ = AT_HOME || !IS_ELECTRON ? "invisible" : "visible";
=======
  const class_ = config.USE_PHOTODIODE ? "visible" : "invisible";
>>>>>>> honeycomb/main

  const markup = `<div class="photodiode-box ${class_}" id="photodiode-box">
									<span id="photodiode-spot" class="photodiode-spot"></span>
  								</div>`;
  return markup;
};

<<<<<<< HEAD
// SWAPPED COLORS
const pdSpotEncode = taskCode => {
  function pulse_for(ms, callback) {
    $(".photodiode-spot").css({"background-color": "black"});
    setTimeout(() => {
      $(".photodiode-spot").css({"background-color": "white"});
=======
const pdSpotEncode = (taskCode) => {
  function pulse_for(ms, callback) {
    $(".photodiode-spot").css({ "background-color": "black" });
    setTimeout(() => {
      $(".photodiode-spot").css({ "background-color": "white" });
>>>>>>> honeycomb/main
      callback();
    }, ms);
  }

  function repeat_pulse_for(ms, i) {
    if (i > 0) {
      pulse_for(ms, () => {
        setTimeout(() => {
          repeat_pulse_for(ms, i - 1);
        }, ms);
      });
    }
  }

<<<<<<< HEAD
  if (!AT_HOME && IS_ELECTRON) {
=======
  if (config.USE_PHOTODIODE) {
>>>>>>> honeycomb/main
    const blinkTime = 40;
    let numBlinks = taskCode;
    if (taskCode < eventCodes.open_task) numBlinks = 1;
    repeat_pulse_for(blinkTime, numBlinks);
    if (ipcRenderer) ipcRenderer.send("trigger", taskCode);
  }
};

<<<<<<< HEAD
export {photodiodeGhostBox, pdSpotEncode};
=======
export { photodiodeGhostBox, pdSpotEncode };
>>>>>>> honeycomb/main
