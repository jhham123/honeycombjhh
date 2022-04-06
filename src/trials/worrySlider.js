function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const worrySlider = {
  type: "html_slider_response",
  stimulus: '<div class="happiness-text-slider">How worried are you at this moment?</div>',
  labels: ["very worried", "not worried at all"],
  start: getRandomInt(10,90),
  require_movement: true,
  button_label: "Continue",
  response_ends_trial: true,
  step: 1,
  on_finish: (data) => {
    data.trial_tag = "worry_slider"
  }
};

export default worrySlider;
