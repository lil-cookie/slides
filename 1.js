window.onload=init;

var slider;
var ctxSlider;

//var buttons;
//var ctxButtons;

var gameWidth = "1280";
var gameHeight = "752";


var bg = new Image();
bg.src = "img/back.png";

var numbers = new Image();
numbers.src = "img/figures.png";

function init()
{
  slider = document.getElementById("slider"),
  ctxSlider = slider.getContext('2d');

  slider.width  = gameWidth;
  slider.height = gameHeight;

  drawBg();
/*
  rollerCanvas = document.getElementById("roller");
  rollerCtx = rollerCanvas.getContext("2d");
  rollerCanvas.width = gameWidth;
  rollerCanvas.height = gameHeight;
  width = 89;
  height = 90;
  drag = false; // переменная истинная когда зажата кнопка мыши
  dragRect = new Shape(100, 475, width, height);
  rollerCanvas.onmousedown = mouseDown;
 setInterval(draw, 1000 / 60);*/
}




function drawBg()
{
  ctxSlider.drawImage(bg, 0,0, gameWidth,gameHeight, 0,0,gameWidth,gameHeight);  
  ctxSlider.drawImage(numbers, 0,0, 941,24, 170,465,941,24);  
}


/*
// Метод отрисовки
function draw() {
  dragRect.draw();
}
var roller = new Image();
roller.src = "img/roller white.png";


// Класс задающий прямокгольник
function Shape(topX, topY, width, height) {
  this.x = topX;
  this.y = topY;
  this.height = height; // Высота
  this.width = width; // Ширина
  this.offsetX = 0;
  this.draw = function() // Метод рисующий прямоугольник
  {
    rollerCtx.clearRect(0,0,gameWidth,gameHeight);
    rollerCtx.drawImage(roller, 0,0, this.width, this.height, this.x, this.y,this.width, this.height); 
  }
}
// Метод срабатывающий на нажатие кнопки мыши
function mouseDown(evt) {
  var mouseX = evt.pageX - rollerCanvas.offsetLeft;
  if (mouseX < dragRect.x + dragRect.width && mouseX > dragRect.x) {
    drag = true;
    dragRect.offsetX = mouseX - dragRect.x + 8;
    rollerCanvas.onmousemove = mouseMove;
    rollerCanvas.onmouseup = mouseUp;
  }
}
// Движение мыши
function mouseMove(evt) {
  var mouseX = evt.pageX;
  if (drag) {
    // Изменение координат фигуры
    dragRect.x = mouseX - dragRect.offsetX; 
  }
}
// Если отпущина кнопка мыши, то переменная drag принимает ложное значение
function mouseUp(evt) {
  drag = false;
}*/