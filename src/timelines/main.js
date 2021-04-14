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
import {jsPsych} from "jspsych-react";
import webgazerCamera from "../trials/webgazerCamera";

// const primaryTimeline = [preamble,  animation, survey(), textInput(), session(), experimentEnd(), experimentEndBuffer()];
console.log(jsPsych)

const primaryTimeline = [preamble, wheel()];

// jsPsych.init({
//   timeline: primaryTimeline,
//   extensions: [
//     {type: 'webgazer'}
//   ]
// })

export const tl = primaryTimeline;
