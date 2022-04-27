// import trials
<<<<<<< HEAD
import fixation from '../trials/fixation'
import showCondition from '../trials/showCondition'
import taskEnd from '../trials/taskEnd'

// default code; not used

const taskTrial = (blockSettings, blockDetails, condition) => {
  // initialize trial details
  let trialDetails = {
    condition: condition,
    trial_earnings: 0,
    start_time: Date.now()
  }

  // timeline
  let timeline = [
    // show condition
    showCondition(condition, 1000, 500),
    fixation(650),
    // end the trial
    taskEnd(trialDetails, 500)
  ]

    return {
  		type: 'html_keyboard_response',
  		timeline: timeline
  	}
}

export default taskTrial
=======
import { showMessage, fixation } from "@brown-ccv/behavioral-task-trials";
import { config } from "../config/main";
import { eventCodes } from "../config/main";
import { earningsDisplay } from "../lib/markup/earnings";

const taskTrial = (blockSettings, blockDetails, condition) => {
  // timeline
  let timeline = [
    // fixation
    fixation(config, {
      duration: 650,
    }),
    // show condition
    showMessage(config, {
      message: condition,
      onstart: true,
      taskCode: eventCodes.evidence,
    }),
    fixation(config, {
      duration: 650,
    }),
    // end the trial
    showMessage(config, {
      stimulus: earningsDisplay(Math.random()),
      taskCode: eventCodes.show_earnings,
    }),
  ];

  return {
    type: "html_keyboard_response",
    timeline: timeline,
  };
};

export default taskTrial;
>>>>>>> honeycomb/main
