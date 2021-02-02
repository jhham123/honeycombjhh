const textInput = () => {

  return {
    type: 'survey_text',
    questions: [{prompt: '<div class="survey-item">How do you feel right now?</div>', rows: 5, columns: 40}],
    on_finish: (data) => {
      data.trial_tag = "text_input"
    }
  }
  };

export default textInput;
