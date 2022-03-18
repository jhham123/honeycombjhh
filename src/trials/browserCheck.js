// const browserCheck = () => {
//   return {
// 		type: 'html_button_response',
// 	};
// };
// export default browserCheck;

import {lang} from "../config/main";

const browserCheck = () => {
  return {
    type: "screen-check",
    stimulus: '<div class="happiness-text-slider">You lost $2 on the first wheel.</div>',
    choices: [lang.prompt.continue.button]
  };
};

export default browserCheck;
