/* проверяет загрузился ли документ, только тогда запускается */
$(document).ready(function () {
    let tabsItem = $('.tabs-item');  /* создание новой переменной с классом .tabs-item */
    /*анонимная функция с параметром event вызывается при click на tabsItem */
    tabsItem.on('click', function(event) {  
         event.preventDefault(); /* функция отменяет стандартные действия при клике */ 
         let activeContent = $(this).attr('href'); /* в activeContent будет храниться id нужного нам элемента */
         $('.visible').toggleClass('visible');
         $(activeContent).toggleClass('visible'); /* к данной переменной присваивается класс visible */
         $('.tabs-item-active').toggleClass('tabs-item-active');
         $(this).toggleClass('tabs-item-active'); /* класс присваивается только тому элементу, на который мы кликнули */
        });          
});