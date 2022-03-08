// presets
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");

// canvas hiegth + width
cnv.width = 800;
cnv.height = 600;

// stars, i want really hard and crazy on these
fill("black")
stroke("green", 2)
drawAStar(300, 200, 5, 50, 20, [true, false]);

fill("gold")
stroke("gold",5)
drawAStar(0, 0, 100, 200, 0, [false, true]);

fill("gold")
stroke("green", 1)
drawAStar(500, 400, 400, 200, 0, [false, true]);


// definetly less work then the stars. realistic traingles
stroke("red", .25)
drawRealisticTriangle(500, 40, 550, 140, 600, 40, [false])

stroke("blue", 5)
drawRealisticTriangle(800, 40, 550, 140, 600, 40, [true])

stroke("black", 10)
drawRealisticTriangle(200, 140, 250, 540, 500, 40, [false])

// draw any shape
drawAnyShape(200, 100, 4, 200, [false, true]);
drawAnyShape(200, 10, 6, 200, [true, true]);
drawAnyShape(200, 100, 4, 20, [false, true]);

