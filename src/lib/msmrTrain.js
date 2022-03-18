/**
 * Streamlined version of jspsych-muli-stim-multi-response (JS Psych, de Leeuw) and
 * Poldrack adapted version (Experiment Factory).
 *
 * Variant created by Peter F. Hitchcock, Brown University - August 2021
 *
 * Notes:
 * - Number of responses recorded hard coded at 2
 * - Trial expires after duration rather than n responses
 * - Any keys are registered, but valid keys are specific to conditions from
 * cognitive actions study
 * - Shows a multi-stimulus array displayed all at once, rather than stimuli
 * in sequence
 **/


import { jsPsych } from "jspsych-react";
import { cognLookup, overtLookup } from "../config/main";

export function msmrTrain() {

  var plugin = {};

  jsPsych.pluginAPI.registerPreload('msmrTrain', 'stimulus', 'image');

  /* Define plugin parameters */
  plugin.info = {
    name: 'msmr-train',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.IMAGE,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The image to be displayed'
      },
      choices: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        array: true,
        pretty_name: 'Choices',
        default: jsPsych.ALL_KEYS,
        description: 'The keys the subject is allowed to press to respond to the stimulus.'
      },
      choice_pairs: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        array: true,
        pretty_name: 'Key pairs',
        default: jsPsych.ALL_KEYS,
        description: 'The acceptable key pairings the subject can enter.'
      },
      stimulus_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus duration',
        default: null,
        description: 'How long to hide the stimulus.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show trial before it ends.'
      },
      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response ends trial',
        default: true,
        description: 'If true, trial will end when subject makes a response.'
      },
    }
  }

  plugin.trial = function(display_element, trial) {

    /* Define global parameters for the trial */
    // Globally available arrays
    var setTimeoutHandlers = [];
    var allKeyArrays = [];
    var allRTArrays = [];

    var html = '<p style="color:white">Hold the Q and P keys on your keyboard for 60 seconds</p>';


    display_element.innerHTML = html;

    /* Start function definitions */
    function convertToChar(character) {
      // Maps keys to string outputs for pt feedback //

      // Valid keys in cognitive..
      var lookup = [];
      if (trial.condition === "cognitive") {
        lookup = cognLookup;
      } else { // .. vs. overt condition
        lookup = overtLookup;
      }

      var char_translated;
      if (typeof lookup[character] !== 'undefined') {
        char_translated = lookup[character];
      }
      return char_translated;
    };


    var after_response = function(info) {
    // Handle multiple responses per trial //
      // This function is entered on each key press, so this stores
      // the specific key press each time..
      var res = info.key;
      var rts = info.rt;

      // .. Then it's pushed into the full array that records all keys and RTs
      allKeyArrays.push(res);
      allRTArrays.push(rts);
    };


    var end_trial = function() {
    // End trial once trial duration is reached //
			console.log(allKeyArrays)
      // Kill any remaining setTimeout handlers and key board listeners
      for (var i = 0; i < setTimeoutHandlers.length; i++) {
        clearTimeout(setTimeoutHandlers[i]);
      }
      jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);

      // Convert keys to characters..
      let keyArray = allKeyArrays.map(convertToChar);
      //console.log("\n MSMR key array", keyArray);
      // .. and only take the first 2.
      let twoKeys = keyArray.slice(0, 2);
      // Finally, filter any keys that weren't valid responses this trial
      var finalKeys = twoKeys.filter(x => x !== undefined);

      // Package up trial data..
      var trial_data = {
        // Note these are cumulative RTs, not specific key rts
        "rt": JSON.stringify(allRTArrays.slice(0, 2)),
        "stimuli": JSON.stringify(trial.stimuli),
        // Only valid key presses for this trial type
        "key_presses": JSON.stringify(finalKeys),
        "key_press_array": finalKeys,
        "possible_responses": trial.choices,
        "overt_pairs": trial.choice_pairs, // ** Can delete?
        "block_duration": trial.timing_response,
      };
    //   console.log("\n MSMR key presses:", trial_data.key_presses);
    //   console.log("\n MSMR RTs:", trial_data.rt);

      // .. and save it and move to next trial
      jsPsych.finishTrial(trial_data);

    };
    /* End function definitions */

    /* Start trial calls */
    // Start listening for responses
    if (trial.choices !== jsPsych.NO_KEYS) {
      var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        // Note that although keys are registered, only valid responses (trial.choices)
        // are recorded
        valid_responses: jsPsych.ALL_KEYS,
        rt_method: 'performance',
        persist: true, // Allow multiple responses
        allow_held_key: true
      });
    }

    // Hide stimulus if stimulus_duration is set
    if (trial.stimulus_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        display_element.querySelector('#jspsych-image-keyboard-response-stimulus').style.visibility = 'hidden';
      }, trial.stimulus_duration);
    }

    // End trial if trial_duration is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);
    }
    /* End trial calls */

  };

  return plugin;
}
