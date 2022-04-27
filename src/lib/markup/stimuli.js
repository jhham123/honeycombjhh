<<<<<<< HEAD
const baseStimulus = (element, prompt=false) => {
  const class_ = (prompt) ? 'main-prompt': 'main'
  return `<div class=${class_}>${element}</div>`
}


export {
  baseStimulus
}
=======
const baseStimulus = (element, prompt = false, centered = false) => {
  const class_ = centered
    ? "center_container"
    : prompt
    ? "main-prompt"
    : "main";
  return `<div class=${class_}>${element}</div>`;
};

export { baseStimulus };
>>>>>>> honeycomb/main
