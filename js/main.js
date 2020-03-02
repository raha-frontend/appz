// получаем пункты списка слайдера со страницы
var sliderList = document.querySelector('.slider-list');
// получаем все пункты слайдера
var sliderItems = document.querySelectorAll('.slider-item');
// картинка в руке
var viewImage = document.querySelector('.hand-iphone img');
// нажимаем на список слайдера
sliderList.addEventListener('click', function(event) {
    // ставим условие что нажимаем только на LI
    if (event.target.tagName === 'IMG') {
        var sourceImg = event.target.getAttribute('data-image');
        console.log('sourceImg', sourceImg);
        //меняем путь картинки в руке
        viewImage.setAttribute('src', sourceImg);
        // убираем у всехпунктов класс активный
        sliderItems.forEach(function(item) {
            //удаляем класс
            item.classList.remove('active');
        }); 
        // текущему родительскому LI ставим активный класс
        event.target.parentNode.classList.add('active'); 
    }
});
