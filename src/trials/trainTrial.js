import { pdSpotEncode } from '../lib/markup/photodiode';
import { eventCodes } from '../config/main';
import { jsPsych } from "jspsych-react";

const trainTrial = () => {

    const code = eventCodes.non_fixation;

        var thisTrial = {

            type: 'msmr-train',
            choices: jsPsych.ALL_Keys,
            response_ends_trial: false,
            trial_duration: 20000,
						stimulus: [],
            on_load: () => pdSpotEncode(code),
            on_finish: (data) => {

                /* Get ready to compare answer to received response */
                // let rawCorrAnswer = trial.answer;

								let corrAnswer = 10;

                /* Prep key presses for commparison */
                let kp = data.key_presses;
								// Comes in as string so pull out just the keys  ** Next check which keys this gets and probably NEED TOCONVERT TO ARRAY
                let strKeys = kp.slice(2,3).concat(kp.slice(6,7));// = kp.slice(2,3).concat(kp.slice(6,7));

                /* Save out */
                data.true_answer = corrAnswer;

                if (data.key_presses !== null) {
                    // Attach to data to save out..
                    data.correct = strKeys === corrAnswer;
                }
                else {
                    data.correct = false;
                }
                data.code = data.key_presses - 48
            }
        }

    return thisTrial;
    }

export default trainTrial
