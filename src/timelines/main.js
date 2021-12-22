import preamble from "./preamble";
import ev1 from "../trials/ev1"
import ev2 from "../trials/ev2"
import ev3 from "../trials/ev3"
import review1 from "../trials/review1"
import review2 from "../trials/review2"
import review3 from "../trials/review3"
import wheel1a from "../trials/wheel1a"
import wheel1b from "../trials/wheel1b";
import wheel2a from "../trials/wheel2a";
import wheel2b from "../trials/wheel2b";
import wheel3a from "../trials/wheel3a";
import wheel3b from "../trials/wheel3b";
import session from "./session";
import happinessSlider from "../trials/happinessSlider";
import worrySlider from "../trials/worrySlider";
import happinessBlock from "./happinessBlock";
import largeWhiteText from "../trials/largeWhiteText";
import experimentEnd from "../trials/experimentEnd";
import experimentEndBuffer from "../trials/experimentEndBuffer";
import survey from "../trials/survey";
import textInput from "../trials/textInput";
import animation from "../trials/animation";
import {jsPsych} from "jspsych-react";
import webgazerCamera from "../trials/webgazerCamera";

// a timeline highlighting several trial types
const primaryTimeline = [
  preamble,
  ev1(),
  wheel1a(),
  happinessSlider,
  worrySlider,
  wheel1b(),
  review1(),
  happinessSlider,
  ev2(),
  wheel2a(),
  happinessSlider,
  worrySlider,
  wheel2b(),
  review1(),
  review2(),
  happinessSlider,
  ev3(),
  wheel3a(),
  happinessSlider,
  worrySlider,
  wheel3b(),
  review1(),
  review2(),
  review3()
];

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
