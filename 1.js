window.onload=init;

var slider;
var ctxSlider;

var buttons;
var ctxButtons;

var gameWidth = "1280";
var gameHeight = "752";


var bg = new Image();
bg.src = "img/back.png";

var numbers = new Image();
numbers.src = "img/figures.png";

var roller = new Image();
roller.src = "img/roller white.png";

var but_day = new Image();
but_day.src = "img/day-button.png";

var but_day_pushed = new Image();
but_day_pushed.src = "img/day-pushed-button.png";

var but_week = new Image();
but_week.src = "img/week-button.png";

var but_week_pushed = new Image();
but_week_pushed.src = "img/week-pushed-button.png";

var but_mounth = new Image();
but_mounth.src = "img/mounth-button.png";

var but_mounth_pushed = new Image();
but_mounth_pushed.src = "img/mounth-pushed-button.png";

function init()
{
  slider = document.getElementById("slider"),
  ctxSlider = slider.getContext('2d');
 
  buttons = document.getElementById("buttons"),
  ctxButtons = slider.getContext('2d');

  slider.width  = gameWidth;
  slider.height = gameHeight;

  drawBg();
  drawButtons()
}

function drawBg()
{
  ctxSlider.drawImage(bg, 0,0, gameWidth,gameHeight, 0,0,gameWidth,gameHeight);  
  ctxSlider.drawImage(numbers, 0,0, 941,24, 170,465,941,24);  
}


var butWidth = "209";
var butHeight = "75";

function drawButtons()
{
  ctxButtons.drawImage(but_day, 0,0, butWidth,gameHeight, 330,630,butWidth,gameHeight);  
  ctxButtons.drawImage(but_week, 0,0, butWidth,butHeight, 540,630,butWidth,butHeight); 
  ctxButtons.drawImage(but_mounth, 0,0, butWidth,butHeight, 750,630,butWidth,butHeight); 
}



