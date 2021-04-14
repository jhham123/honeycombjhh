/**
 * This trial shows a slider. The stimulus field controls the question, the labels fields
 * control the ends of the slider, and the step field controls the granularity of the slider
 * which ranges from 0-100 (i.e. step = 10 indicates 10 choices on the slider, because 100/10 = 10)
 */

const happinessSlider = {
  type: "html_slider_response",
  stimulus: '<div class="happiness-text-slider">How happy are you at this moment?</div>',
  labels: ["very unhappy", "very happy"],
  require_movement: true,
  button_label: "Continue",
  trial_duration: 4000,
  response_ends_trial: true,
  step: 10,
  on_finish: (data) => {
    data.trial_tag = "happiness_slider"
  }
};

export default happinessSlider;
