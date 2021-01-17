import preamble from "./preamble";
import gamble_session from "./gamble_session";
import happiness_slider from "../trials/happiness_slider";

const primaryTimeline = [preamble, happiness_slider, gamble_session()];

export const tl = primaryTimeline;
