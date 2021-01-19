import preamble from "./preamble";
import session from "./session";
import happinessSlider from "../trials/happinessSlider";
import happinessBlock from "./happinessBlock";
import largeWhiteText from "../trials/largeWhiteText";
import experimentEnd from "../trials/experimentEnd";
import experimentEndBuffer from "../trials/experimentEndBuffer";
import {jsPsych} from "jspsych-react";

const primaryTimeline = [preamble, session(), experimentEnd(), experimentEndBuffer()];

export const tl = primaryTimeline;
