document.addEventListener('DOMContentLoaded', (event) => {
    console.log('test-script1');
});


window.addEventListener('load', (event) => {
    console.log('test-script');
    // Получаем все элементы <h4> и <a> внутри элемента с классом "footer-bottom"
    var elements = document.querySelectorAll('.footer-bottom h4, .footer-bottom a');
    
    // Применяем стиль к каждому найденному элементу
    elements.forEach(function(element) {
        element.style.color = 'green';
    });
});
console.log('test-script133');
