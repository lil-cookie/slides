$(document).ready(function(){   
    // создаем действия при клике на кнопку
    var animateTest = function() {
        // перед запуском анимации снимаем все действия с кнопки
        // чтобы пользователь не мог сделать повторные клики
        $(this).unbind('click');
        // запуск анимации
        $(this).animate(
            // анимация
            {
            'left': '550',
            'top': '450',
            'width': '300px',
            }, 
            // скорость анимации
            2500,
            // действие по завершению анимации              
            

            (function(){
                // как анимация завершиться "разблокируем кнопку"
                // навесим на нее опять действие
                $('#pill').removeClass("rotate");
                //$('#pill').addClass("hide");
                document.getElementById('pill').style.display="none";
                document.getElementById('pacient').style.backgroundImage="url(img/happy.png)";
                document.getElementById('pacient').style.left="200px";
            })                  
        ).addClass('rotate');
    }
     
    //  задаем действия для кнопки
    $('#pill').bind('click', animateTest);
});


/*var pill = document.getElementById('pill');

pill.onmousedown = function(e) { // 1. отследить нажатие

  // подготовить к перемещению
  // 2. разместить на том же месте, но в абсолютных координатах
  pill.style.position = 'absolute';
  moveAt(e);
  // переместим в body, чтобы  был точно не внутри position:relative
  document.body.appendChild(pill);

  // передвинуть  под координаты курсора
  // и сдвинуть на половину ширины/высоты для центрирования
  function moveAt(e) {
    pill.style.left = e.pageX - pill.offsetWidth / 2 + 'px';
    pill.style.top = e.pageY - pill.offsetHeight / 2 + 'px';
  }

  // 3, перемещать по экрану
  document.onmousemove = function(e) {
    if (pill.style.Left > 450)
    {pill.style.display(none); console.log("sfsd")}
    moveAt(e);
  }

  // 4. отследить окончание переноса
  pill.onmouseup = function() {
    document.onmousemove = null;
    pill.onmouseup = null;
  }
}

pill.ondragstart = function() {
  return false;
};*/
