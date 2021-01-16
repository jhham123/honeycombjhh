import preamble from "./preamble";
import gamble_session from "./gamble_session";

const primaryTimeline = [preamble, gamble_session()];

export const tl = primaryTimeline;
