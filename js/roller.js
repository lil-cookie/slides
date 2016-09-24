
$(document).ready(function(){
  $( "#rollerContainer" ).slider({
  value : 1,//значение, которое будет выставлено слайдеру при загрузке
  min : 1,//минимально возможное значение на ползунке
  max : 21,//максимально возможное значение на ползунке
  step : 1,//шаг, с которым будет двигаться ползунок
  create: function( event, ui ) {
   val = $( "#rollerContainer" ).slider("value");//при создании слайдера, получаем его значение в перемен. val
  $( "#contentRoller").html( val );//заполняем этим значением элемент с id contentRoller
 },
 slide: function( event, ui ) {
  $( "#contentRoller" ).html( ui.value );//при изменении значения ползунка заполняем элемент с id contentRoller
  redBox(ui.value);          
            }
        });
});

var oldValue=1;
countMargin = 0;

//функция перемещения красного квадрата
function redBox(val)
{
 countMargin= (val-1)*46; //46px - длина одного шага
 $(".redBoxContainer").animate({
            marginLeft: countMargin+"px"
        },20);
 oldValue=val;
}