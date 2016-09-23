$(".item").children().clone()               // сделаем копию элемента hello
 //  .text("И снова здравствуйте!")  изменим текст внутри нее
.appendTo("#slide2");          // вставим измененный элемент в конец элемента container

$("#slide2").attr('id','locked');         // добавим этой копии класс newElement

