import {lang} from "../config/main";
import {baseStimulus} from "../lib/markup/stimuli";
import {jsPsych} from "jspsych-react";

const experimentEnd = () => {
  // let stimulus = baseStimulus(`<h1>${lang.task.end}</h1>`, true);
  let stimulus = baseStimulus(`<h1>${lang.task.end}</h1>`, true);

  return {
    type: "html_keyboard_response",
    stimulus: stimulus,
    response_ends_trial: true,
    on_finish: (data) => {
      jsPsych.data.get().localSave('csv','mydata.csv');
    }
  };
};

export default experimentEnd;
