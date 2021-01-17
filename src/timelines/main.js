import preamble from "./preamble";
import gamble_session from "./gamble_session";
import happiness_slider from "../trials/happiness_slider";
import large_white_text from "../trials/large_white_text";

const primaryTimeline = [preamble, large_white_text("How happy are you at this moment?", 4000), happiness_slider, gamble_session()];

export const tl = primaryTimeline;
