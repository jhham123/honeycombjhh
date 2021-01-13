export const numberBoxes = (left, rightTop, rightBot) => {
  if (left && rightTop && rightBot) {
    return `
    <div class="beads_container" style="background-color: black">
      <div class="fixation-plus"></div>
      <div class="left"></div>
      <div class="right-top"></div>
      <div class="right-bot"></div>
    </div>
    `;
  }
};
