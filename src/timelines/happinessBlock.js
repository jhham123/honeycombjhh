import fixation from "../trials/fixation";
import largeWhiteText from "../trials/largeWhiteText";
import happinessSlider from "../trials/happinessSlider";
import {jitter} from "../lib/utils";

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
