let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");

cnv.width = 800;
cnv.height = 600;

fill("black")
stroke("green", 2)
drawAStar(300, 200, 5, 50, 20, [true, false]);

fill("gold")
stroke("gold",5)
drawAStar(0, 0, 100, 200, 0, [false, true]);

fill("gold")
stroke("green", 1)
drawAStar(500, 400, 400, 200, 0, [false, true]);

let x1 = 500, y1 = 40, x2 = 550, y2 = 140, x3 = 600, y3 = 40; 

triangle(500, 40, 550, 140, 600, 40, "stroke")
line(500, 40, 500 - 20, 40 - 15)
line(550, 140, 550 - 20, 140 - 15)
line(600, 40, 600 - 20, 40 - 15)
line(550 - 20, 140 - 15,  500 - 20, 40 - 15)

function stroke(style, lineWidth) {
  ctx.strokeStyle = style;
  ctx.lineWidth = lineWidth
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

function drawAStar(starCenterX, starCenterY, numberOfSpikes, outerDepth, innerDepth, [fill, stroke]) {
  let
    angle = 0,
    step = Math.PI / numberOfSpikes;
  ctx.beginPath();
  for (let i = 0; i < numberOfSpikes; i++) {
    angle += step;
    x = starCenterX + Math.cos(angle) * outerDepth;
    y = starCenterY + Math.sin(angle) * outerDepth;
    ctx.lineTo(x, y);

    angle += step;
    x = starCenterX + Math.cos(angle) * innerDepth;
    y = starCenterY + Math.sin(angle) * innerDepth;
    ctx.lineTo(x, y);
  }
  if (fill === true && stroke === true){
    ctx.fill();
    ctx.closePath();
    ctx.stroke()
  } else if (stroke === true) {
    ctx.closePath();
    ctx.stroke();
  } else if (fill === true) {
    ctx.fill();
  }
}