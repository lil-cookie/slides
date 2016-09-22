
$(document).ready(function(){
  $( "#rollerContainer" ).slider({
  value : 1,//Значение, которое будет выставлено слайдеру при загрузке
  min : 1,//Минимально возможное значение на ползунке
  max : 21,//Максимально возможное значение на ползунке
  step : 1,//Шаг, с которым будет двигаться ползунок
  create: function( event, ui ) {
   val = $( "#rollerContainer" ).slider("value");//При создании слайдера, получаем его значение в перемен. val
  $( "#contentRoller" ).html( val );//Заполняем этим значением элемент с id contentSlider
 },
 slide: function( event, ui ) {
  $( "#contentRoller" ).html( ui.value );//При изменении значения ползунка заполняем элемент с id contentSlider
            }
        });
});