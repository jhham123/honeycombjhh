import {lang} from "../config/main";

const ev2 = () => {
  return {
    type: "html_button_response",
    stimulus: '<div id="wrapper"><div class="envelope open"><div class="flap front"></div><div class="flap top"></div><div class="letter"><p style="text-align:center; font-size:36px; color:green; line-height:1.15">+$4</p><p style="text-align:center; font-size:10px">$4 has been added to your bonus</p></div></div></div>',
    choices: [lang.prompt.continue.button],
		on_finish: (data) => {
			data.trial_tag = "e2"
		}
  };
};

export default ev2;
