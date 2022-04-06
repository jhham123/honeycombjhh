/**
 * This trial shows a slider. The stimulus field controls the question, the labels fields
 * control the ends of the slider, and the step field controls the granularity of the slider
 * which ranges from 0-100 (i.e. step = 10 indicates 10 choices on the slider, because 100/10 = 10)
 */

 function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
 }

const happinessSlider = {
  type: "html_slider_response",
  stimulus: '<div class="happiness-text-slider">How happy are you at this moment?</div>',
  labels: ["very unhappy", "very happy"],
  require_movement: true,
  button_label: "Continue",
  start: getRandomInt(10,90),
  response_ends_trial: true,
  step: 1,
  on_finish: (data) => {
    data.trial_tag = "happiness_slider"
  }
};

export default happinessSlider;
