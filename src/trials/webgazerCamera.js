import {lang} from "../config/main";
import {baseStimulus} from "../lib/markup/stimuli";
import {jsPsych} from "jspsych-react";
import {webgazer} from "webgazer";

/**
 * Simple webgazer trial
 */
const webgazerCamera = () => {

  return {
    type: "webgazer_init_camera"
  };
};

export default webgazerCamera;
