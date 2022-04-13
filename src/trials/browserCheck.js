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
    choices: [lang.prompt.continue.button]
  };
};

export default browserCheck;
