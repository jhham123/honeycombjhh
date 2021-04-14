import fixation from "../trials/fixation";
import largeWhiteText from "../trials/largeWhiteText";
import happinessSlider from "../trials/happinessSlider";
import {jitter} from "../lib/utils";

/**
 * This timeline asks how happy you are for 4000ms, shows a slider and records 
 * its result, and then shos a fixation point for a random interval bounded by 3000ms
 * and 3000+8000 = 12000ms. The interval is chosen uniformly at random.
 */
const happinessBlock = () => {
  return {
    type: "html_keyboard_response",
    stimulus: '',
    timeline: [
      largeWhiteText("How happy are you at this moment?", 4000),
      happinessSlider,
      fixation(jitter(3000, 8000))
    ]
  };
};

export default happinessBlock;
