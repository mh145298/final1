var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


var x = 100;
var y = 100;
var x1 = 120;
var y1 = 120;
var x2 = 130;
var y2 = 130;


setInterval(function(){
  ctx.clearRect(0, 0, 400, 400);

  drawBee(x, y);
drawBee(x1, y1);
  drawBee(x2, y2);
  x = update(x);
  y = update(y);
  x1 = update(x1);
  y1 = update(y1);
  x2 = update(x2);
  y2 = update(y2);

  ctx.strokeRect(0, 0, 400, 400);
}, 30);

var circle = function(x,y,radius, fillCircle){
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if(fillCircle){
    ctx.fill();
  }
  else {
    ctx.stroke();
  }
};

var drawBee = function(x, y){
  ctx.lineWidth = 2;
  ctx.strokeStyle = "Black";
  ctx.fillStyle = "Gold";

  circle(x, y, 8, true);
  circle(x, y, 8, false);
  circle(x - 5, y -11, 5, false);
  circle(x + 5, y -11, 5, false);
  circle(x - 2, y -1, 2, false);
  circle(x + 2, y -1, 2, false);
};



var update = function(coordinate){
  var offset = Math.random() * 4 -2;
  coordinate = coordinate + offset;

  if(coordinate > 400){
    coordinate = 200;
  }
  if (coordinate < 0) {
    coordinate = 0;
  }
  return coordinate;
};
