window.onload=init;

var pill;
var ctxPill;

//var buttons;
//var ctxButtons;

var gameWidth = "1280";
var gameHeight = "752";

//var numbers = new Image();
//numbers.src = "img/figures.png";

function init()
{
  pill = document.getElementById("pill");
  ctxPill = pill.getContext('2d');

  pill.width  = gameWidth;
  pill.height = gameHeight;

  rollerCanvas = document.getElementById("pill");
  rollerCtx = rollerCanvas.getContext("2d");
  rollerCanvas.width = gameWidth;
  rollerCanvas.height = gameHeight;
  width = 150;
  height = 65;
  drag = false; // переменная истинная когда зажата кнопка мыши
  dragRect = new Shape(rollerCanvas.width / 2 - width / 2, rollerCanvas.height / 2 - height / 2, width, height);
  rollerCanvas.onmousedown = mouseDown;
  setInterval(draw, 1000 / 60);
}




// Метод отрисовки
function draw() {
  //rollerCtx.fillStyle = "#BDBDFF";
  //rollerCtx.fillRect(0, 0, rollerCanvas.width, rollerCanvas.height);
  dragRect.draw();
}
var roller = new Image();
roller.src = "img/pill.png";


// Класс задающий прямокгольник
function Shape(topX, topY, width, height, fillColor, strokeColor) {
  this.x = topX;
  this.y = topY;
  this.height = height; // Высота
  this.width = width; // Ширина
  this.offsetX = 0;
  this.offsetY = 0;
  this.draw = function() // Метод рисующий прямоугольник
  {
    rollerCtx.clearRect(0,0,1000,1000);
     rollerCtx.drawImage(roller, 0,0, this.width, this.height, this.x, this.y,this.width, this.height); 
    //rollerCtx.fillStyle = "#7777FF";
    //rollerCtx.fillRect(this.x, this.y, this.width, this.height);
  }
}
// Метод срабатывающий на нажатие кнопки мыши
function mouseDown(evt) {
  var mouseX = evt.pageX - rollerCanvas.offsetLeft;
  var mouseY = evt.pageY - rollerCanvas.offsetTop;
  if (mouseX < dragRect.x + dragRect.width && mouseX > dragRect.x && mouseY < dragRect.y + dragRect.height && mouseY > dragRect.y) {
    drag = true;
    dragRect.offsetX = mouseX - dragRect.x + 8;
    dragRect.offsetY = mouseY - dragRect.y + 8;
    rollerCanvas.onmousemove = mouseMove;
    rollerCanvas.onmouseup = mouseUp;
  }
}
// Движение мыши
function mouseMove(evt) {
  var mouseY = evt.pageY;
  var mouseX = evt.pageX;
  if (drag) {
    // Изменение координат фигуры
    dragRect.x = mouseX - dragRect.offsetX; 
    dragRect.y = mouseY - dragRect.offsetY;
  }
}
// Если отпущина кнопка мыши, то переменная drag принимает ложное значение
function mouseUp(evt) {
  drag = false;
}