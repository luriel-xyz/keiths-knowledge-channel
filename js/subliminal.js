const defaultParams = {
  framePeriod: 20 /* milliseconds between each frame */,
  font: "4.5rem Arial",
  textColor: "rgba(0.9, 0.9, 0.9, 0.9)",
  rightMargin: 300,
  topMargin: 100,
  displayProbability: 0.58,
  zindex: 9999,
};

const subliminalFlash = (messages, params = defaultParams) => {
  const options = { ...defaultParams, ...params };
  const {
    framePeriod,
    font,
    textColor,
    rightMargin,
    topMargin,
    displayProbability,
    zindex,
  } = options;
  const root = document.body;
  const width = document.body.clientWidth;
  const height = document.body.clientHeight;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  canvas.style = `position: fixed; pointer-events: none; z-index: ${zindex}`;
  root.insertBefore(canvas, root.firstChild);

  const update = () => {
    const ctx = canvas.getContext("2d");
    let message = messages[parseInt(Math.random() * messages.length)];
    let x = Math.random() * (width - rightMargin);
    let y = Math.random() * (height - topMargin) + topMargin;

    // Clear the screen
    ctx.font = font;
    ctx.clearRect(0, 0, width, height);

    if (Math.random() < displayProbability) {
      // Display text
      ctx.fillStyle = textColor;
      ctx.fillText(message, x, y);
    }
  };

  if (canvas.getContext) {
    setInterval(update, framePeriod);
  }
};
