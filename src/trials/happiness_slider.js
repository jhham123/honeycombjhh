import {jsPsych} from "jspsych-react";
// "jspsych/plugins/jspsych-image-keyboard-response.js"

const happiness_slider = {
  type: "html_slider_response",
  stimulus:
    '<div class="happiness_stimulus">How happy are you at this moment</div>',
  labels: ["very unhappy", "very happy"],
  require_movement: true,
  button_label: "Continue",
  // trial_duration: 4000,
  response_ends_trial: true,
  step: 10
};

export default happiness_slider;
