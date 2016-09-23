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
                // как анимация завершиться
                $('#pill').removeClass("rotate");
                document.getElementById('pill').style.display="none";
                document.getElementById('pacient').style.backgroundImage="url(img/happy.png)";
                document.getElementById('pacient').style.left="200px";
            })                  
        ).addClass('rotate');
    }
     
    //  задаем действия для кнопки
    $('#pill').bind('click', animateTest);
});
