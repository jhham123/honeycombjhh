const survey = () => {

var options = [
  '<div class="survey-item">1 (not at all typical)</div>',
  '<div class="survey-item">2</div>',
  '<div class="survey-item">3</div>',
  '<div class="survey-item">4</div>',
  '<div class="survey-item">5 (very typical)</div>'];

  return {
    type: "survey_multi_choice",
    preamble: '<div class="survey-item">Rate each of the following statements on a scale of 1 ("not at all typical of me") to 5 ("very typical of me")</div>',
    questions: [
      {prompt: '<div class="survey-item">My worries overwhelm me</div>', options: options, required: true, horizontal: true,},
      {prompt: '<div class="survey-item">I do not tend to worry about things</div>', options: options, required: false, horizontal: true}
    ],
    on_finish: (data) => {
      data.trial_tag = "survey"
    }
    }
  };

export default survey;
