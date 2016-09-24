window.onload=loop;
var next ;
var prev ;

function loop() 
{
next = document.getElementsByClassName("next")[0];
prev = document.getElementsByClassName("prev")[0];
next.addEventListener("click",change,false);
prev.addEventListener("click",change,false);
}


function change() 
{
	console.log("tytyutf");
	$('#pacient-2')[0].style.cssText = $('#pacient-1')[0].style.cssText;
	$('#rollerPosition-2')[0].style.cssText = $('#rollerPosition-1')[0].style.cssText;
	$('#pill-2')[0].style.cssText = $('#pill-1')[0].style.cssText;
}


