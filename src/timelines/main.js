import preamble from "./preamble";
import session from "./session";
import happinessSlider from "../trials/happinessSlider";
import happinessBlock from "./happinessBlock";
import largeWhiteText from "../trials/largeWhiteText";
import experimentEnd from "../trials/experimentEnd";
import experimentEndBuffer from "../trials/experimentEndBuffer";
import survey from "../trials/survey";
import textInput from "../trials/textInput";
import animation from "../trials/animation";
import wheel from "../trials/wheel";
import wheel2 from "../trials/wheel2";
import {jsPsych} from "jspsych-react";
import webgazerCamera from "../trials/webgazerCamera";

// a timeline highlighting several trial types
const primaryTimeline = [preamble, wheel(), wheel2(), survey()];

// a simplified timeline showing just the wheel trial
//const primaryTimeline = [preamble, wheel()];

// preliminary code showing webgazer functionality.
// Webgazer is a eye tracking software from Brown

// jsPsych.init({
//   timeline: primaryTimeline,
//   extensions: [
//     {type: 'webgazer'}
//   ]
// })

export const tl = primaryTimeline;
