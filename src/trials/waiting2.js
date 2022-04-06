const waiting2 = () => {
  return {
    type: "html_keyboard_response",
    stimulus: '<div class="happiness-text-slider">How happy are you at this moment?</div>',
    choices: "NO_KEYS",
		trial_duration: 5000,
  };
};

export default waiting2;
