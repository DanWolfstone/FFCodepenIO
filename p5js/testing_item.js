function setup() { 
  createCanvas(400, 400);
} 
//var 
var wlx = 115
var cR = 10

function draw() { 
  background(220, 0, 0, 120);
  frameRate(781403)
  for (var i = 0; i < 1000; i++) {
  var r = random(45);
  stroke(r * 5);
    strokeWeight(r/4)
  line(/*-2000000*/ 194, i*10000, -3 + r*2.5, i*0.1994);
}
  stroke(0)
  strokeWeight(8)
  line(wlx, 0, wlx, 400)
  strokeWeight(1)
	ellipse(cR+102, cR+150, 15, 15)
  
}
