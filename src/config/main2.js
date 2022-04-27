// config/main.js
// This is the main configuration file where universal and default settings should be placed.
// These settins can then be imported anywhere in the app as they are exported at the botom of the file.

<<<<<<< HEAD
import { jsPsych } from 'jspsych-react'
import _ from 'lodash'
import { eventCodes } from './trigger'

// mapping of letters to key codes
const keys = {
	"A": 65,
	"B": 66,
	"C": 67,
	"F": 70,
	"J": 74,
	"space": 32
}

const overtLookup = {
  '68': 'D',
  '75': 'K',
  '66': 'B',
  '85': 'U',
}

const cognLookup = {
  '48': '0',
  '49': '1',
  '50': '2',
  '51': '3',
  '52': '4',
  '53': '5',
  '54': '6',
  '55': '7',
  '56': '8',
  '57': '9',
};

// is this mechanical turk?
const MTURK = (!jsPsych.turk.turkInfo().outsideTurk)
const AT_HOME = (process.env.REACT_APP_AT_HOME === 'true')
let IS_ELECTRON = true

try {
	window.require('electron')
} catch {
	IS_ELECTRON = false
}

// get language file
const lang = require('../language/en_us.json')
if (MTURK) { // if this is mturk, merge in the mturk specific language
  const mlang = require('../language/en_us.mturk.json')
	_.merge(lang, mlang)
}

const defaultBlockSettings = {
	conditions: ["a", "b", "c"],
	repeats_per_condition: 1, // number of times every condition is repeated
	is_practice: false,
	is_tutorial: false,
	photodiode_active: false
}

export {
	keys,
	defaultBlockSettings,
	lang,
	eventCodes,
	overtLookup,
	cognLookup,
	MTURK,
	AT_HOME,
	IS_ELECTRON
}
=======
import { jsPsych } from "jspsych-react";
import _ from "lodash";
import { eventCodes } from "./trigger";
import { init } from "@brown-ccv/behavioral-task-trials";
import { getProlificId } from "../lib/utils";

// mapping of letters to key codes
const keys = {
  A: 65,
  B: 66,
  C: 67,
  F: 70,
  J: 74,
  space: 32,
};

// audio codes
const audioCodes = {
  frequency: 100 * (eventCodes.open_task - 9),
  type: "sine",
};

const taskName = "honeycomb template";

// is this mechanical turk?
let USE_MTURK = !jsPsych.turk.turkInfo().outsideTurk;
let USE_PROLIFIC = getProlificId() && !USE_MTURK;
let USE_ELECTRON = true;
let USE_FIREBASE = process.env.REACT_APP_FIREBASE === "true";

try {
  window.require("electron");
} catch {
  USE_ELECTRON = false;
}

// whether or not to ask the participant to adjust the volume
const USE_VOLUME = process.env.REACT_APP_VOLUME === "true";
// these variables depend on USE_ELECTRON
// whether or not to enable video
const USE_CAMERA = process.env.REACT_APP_VIDEO === "true" && USE_ELECTRON;
// whether or not the EEG/event marker is available
const USE_EEG =
  process.env.REACT_APP_USE_EEG === "true" && USE_ELECTRON;
// whether or not the photodiode is in use
const USE_PHOTODIODE =
  process.env.REACT_APP_USE_PHOTODIODE === "true" && USE_ELECTRON;

// get language file
const lang = require("../language/en_us.json");
if (!USE_ELECTRON) {
  // if this is mturk, merge in the mturk specific language
  const mlang = require("../language/en_us.mturk.json");
  _.merge(lang, mlang);
}

const defaultBlockSettings = {
  conditions: ["a", "b", "c"],
  repeats_per_condition: 1, // number of times every condition is repeated
  is_practice: false,
  is_tutorial: false,
  photodiode_active: false,
};

// setting config for trials
const config = init({
  USE_PHOTODIODE,
  USE_EEG,
  USE_ELECTRON,
  USE_MTURK,
  USE_VOLUME,
  USE_CAMERA,
  USE_PROLIFIC,
  USE_FIREBASE
});

export {
  taskName,
  keys,
  defaultBlockSettings,
  lang,
  eventCodes,
  config,
  audioCodes,
};
>>>>>>> honeycomb/main
