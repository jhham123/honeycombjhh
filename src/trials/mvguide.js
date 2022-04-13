import {lang} from "../config/main";

const mvguide = () => {
  return {
    type: "html_button_response",
    stimulus: '<div class="happiness-text-slider">You will be able to view the other half of the wheel through a small viewing window for 15 seconds once you hit continue. Do not exit or resize the window. Exiting or resizing the window will result in termination of the session.</div>',
    choices: [lang.prompt.continue.button]
  };
};

export default mvguide;
