export const numberBoxes = (left, rightTop, rightBot) => {
  if (left !== null && rightTop !== null && rightBot !== null) {
    return `
    <div class="grid_container" style="background-color: black">
      <div class="fixation-plus"></div>
      <div class="box left">${left}</div>
      <div class="box right-top">${rightTop}</div>
      <div class="box right-bot">${rightBot}</div>
    </div>
    `;
  } else if (rightTop !== null && rightBot !== null) {
    return `
    <div class="grid_container" style="background-color: black">
      <div class="fixation-plus"></div>
      <div class="box right-top">${rightTop}</div>
      <div class="box right-bot">${rightBot}</div>
    </div>
    `;
  } else if (rightTop !== null) {
    return `
    <div class="grid_container" style="background-color: black">
      <div class="fixation-plus"></div>
      <div class="box right-top">${rightTop}</div>
    </div>
    `;
  } else if (rightBot !== null) {
    return `
    <div class="grid_container" style="background-color: black">
      <div class="fixation-plus"></div>
      <div class="box right-bot">${rightBot}</div>
    </div>
    `;
  }
};
