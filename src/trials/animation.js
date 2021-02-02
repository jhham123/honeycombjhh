// import {jsPsych} from "jspsych-react";
// import wheel from '../img/wheel.png';
//
// const animation = duration => {
//   let stimulus = `<img class="wheel" src="${wheel}"></img>`;
//
//   return {
//     type: "html_keyboard_response",
//     choices: jsPsych.NO_KEYS,
//     stimulus: stimulus,
//     response_ends_trial: false,
//     trial_duration: duration,
//     on_finish: (data) => {
//       data.trial_tag = "animation"
//     }
//   };
// };
//
// export default animation;
import up from '../img/up.png'
import down from '../img/down.png'
import left from '../img/left.png'
import right from '../img/right.png'

var animation_sequence = [up, left, down, right];

var animation = {
    type: 'animation',
    stimuli: animation_sequence,
    sequence_reps: 5,
    frame_time: 1000

};

export default animation;
