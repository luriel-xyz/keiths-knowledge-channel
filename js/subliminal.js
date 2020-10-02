const defaultParams = {
  framePeriod: 20 /* milliseconds between each frame */,
  font: "4.5rem Arial",
  textcolor: "rgba(0.9, 0.9, 0.9, 0.9)",
  rightMargin: 300,
  topMargin: 100,
  displayProbability: 0.58,
  moveProbability: 0.08,
  messageProbability: 0.08,
  zindex: 999,
};

const subliminalFlash = (messages, params = defaultParams) => {
  const options = { ...defaultParams, ...params };
  const root = document.body;
  const canvas = document.createElement("canvas");
  canvas.setAttribute(
    "style",
    "position: fixed; pointer-events: none; z-index: " + options.zindex
  );
  root.insertBefore(canvas, root.firstChild);

  let message = "";
  let x = 0,
    y = 0;

  const update = () => {
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");

    // Clear the screen
    ctx.font = options.font;
    ctx.clearRect(0, 0, width, height);

    if (Math.random() < options.messageProbability || message == "") {
      message = messages[parseInt(Math.random() * messages.length)];
    }
    if (Math.random() < options.moveProbability || (x == 0 && y == 0)) {
      x = Math.random() * (width - options.rightMargin);
      y = Math.random() * (height - options.topMargin) + options.topMargin;
    }
    if (Math.random() < options.displayProbability) {
      // Display the text in the new position
      ctx.fillStyle = options.textcolor;
      ctx.fillText(message, x, y);
    }
  };

  if (canvas.getContext) {
    setInterval(update, options.framePeriod);
  }
};
