let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");

cnv.width = 800;
cnv.height = 600;

line(100, 4, 5, 200);
rect(100, 200, 300, 100, "fill");
circle(10, 20, 30, "fill");
text("lol", 100, 40, "fill");
fill("green");
triangle(0, 300, 450, 230, 500, 300, "fill");
stroke("red");

function stroke(style) {
  ctx.strokeStyle = style;
}

function fill(style) {
  ctx.fillStyle = style;
}

function line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function rect(x, y, w, h, mode) {
  if (mode === "fill") {
    ctx.fillRect(x, y, w, h);
  } else if (mode === "stroke") {
    ctx.filstrokeRect(x, y, w, h);
  }
}

function circle(x, y, r, mode) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.stroke();
  }
}

function text(message, x, y, mode) {
  if (mode === "fill") {
    ctx.fillText(message, x, y);
  } else if (mode === "stroke") {
    ctx.strokeText(message, x, y);
  }
}

function triangle(x1, y1, x2, y2, x3, y3, mode) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.closePath();
    ctx.stroke();
  }
}
drawAnyShape(300, 300, 2);

function drawAnyShape(shapeCenterX, shapeCenterY, numberOfSpikes) {
  let x = shapeCenterX,
    y = shapeCenterY,
    rotations = (Math.PI / 2) * 3,
    step = Math.PI / numberOfSpikes;
  ctx.beginPath();
  ctx.moveTo(shapeCenterX, shapeCenterY);
  for (let i = 0; i < numberOfSpikes; i++) {
    x = shapeCenterX + Math.cos(rotations) * 30;
    y = shapeCenterY + Math.sin(rotations) * 30;
    ctx.lineTo(x, y);
    rotations += step;

    x = shapeCenterX + Math.cos(rotations) * 30;
    y = shapeCenterY + Math.sin(rotations) * 30;
    ctx.lineTo(x, y);
    rotations += step;
  }
  ctx.lineTo(shapeCenterX, shapeCenterY);
  ctx.closePath();
  ctx.lineWidth = 5;
  stroke("blue");
  ctx.stroke();
  fill("skyblue");
  ctx.fill();
}
