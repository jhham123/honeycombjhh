export const numberBoxes = (left, rightTop, rightBot) => {
  if (left !== null && rightTop !== null && rightBot !== null) {
    return `
    <div class="grid_container" style="background-color: black">
      <div class="fixation-plus"></div>
      <div class="left">${left}</div>
      <div class="right-top">${rightTop}</div>
      <div class="right-bot">${rightBot}</div>
    </div>
    `;
  } else if (rightTop !== null && rightBot !== null) {
    return `
    <div class="grid_container" style="background-color: black">
      <div class="fixation-plus"></div>
      <div class="right-top">${rightTop}</div>
      <div class="right-bot">${rightBot}</div>
    </div>
    `;
  } else if (rightTop !== null) {
    return `
    <div class="grid_container" style="background-color: black">
      <div class="fixation-plus"></div>
      <div class="right-top">${rightTop}</div>
    </div>
    `;
  } else if (rightBot !== null) {
    return `
    <div class="grid_container" style="background-color: black">
      <div class="fixation-plus"></div>
      <div class="right-bot">${rightBot}</div>
    </div>
    `;
  }
};
