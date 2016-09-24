/*
файл отвечает за  обновление контента на втором слайде.
*/
window.onload=loop;
var next ;
var prev ;

function loop() 
{
next = document.getElementsByClassName("next")[0];
prev = document.getElementsByClassName("prev")[0];
//вешаем Listener'ов на событие "клик" по стрелокам- навигаторам
next.addEventListener("click",change,false);
prev.addEventListener("click",change,false);
}

//функция, срабатывающая при нажатии на стрелки смены слайдов
function change() 
{
	//изменяем стиль блока с дедом на текущий на текущий на 1 слайде
	$('#pacient-2')[0].style.cssText = $('#pacient-1')[0].style.cssText;
	//изменяем стиль блока с ползунком на текущий на 1 слайде
	$('#rollerPosition-2')[0].style.cssText = $('#rollerPosition-1')[0].style.cssText;
	//изменяем стиль блока с таблеткой на текущий на 1 слайде
	$('#pill-2')[0].style.cssText = $('#pill-1')[0].style.cssText;
}


