console.log('test-script');
console.log('test-script', new Date().toISOString());

// Получаем все элементы <h4> и <a> внутри элемента с классом "footer-bottom"
var elements = document.querySelectorAll('.footer-bottom h4, .footer-bottom a');

// Применяем стиль к каждому найденному элементу
elements.forEach(function(element) {
    element.style.color = 'green';
});
