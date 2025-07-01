(function () {

    document.addEventListener('click', burgerInit)
    function burgerInit(e) {

        const headerNav = document.querySelector('.header__nav')
        const burgerIcon = document.querySelector('.burger-icon')

        const burgerIconTarget = e.target.closest('.burger-icon') // функция closest проверят, есть у элемента родитель с таким классом
        const burgerNavLink = e.target.closest('.header__nav-link') // она не только возвращает родителя, но и если сам эелмент является тем элементов который мы прописали

        if (burgerIconTarget || burgerNavLink) {

            if (document.documentElement.clientWidth > 1220) return // если ширина окна больше 900px то мы не будем добавлять модификатор классу body

            if (!headerNav.classList.contains('header__nav--mob')) {
                burgerIcon.classList.add('burger-icon--focus')
                headerNav.classList.add('header__nav--mob')
            }
            else {
                burgerIcon.classList.remove('burger-icon--focus')
                headerNav.classList.remove('header__nav--mob')
            }
        }
        else if (e.target.classList.contains('header__nav')) {
            return
        }
        else {
            burgerIcon.classList.remove('burger-icon--focus')
            headerNav.classList.remove('header__nav--mob')
        }
    }
    document.addEventListener('DOMContentLoaded', () => {
        // Установите конечную дату
        const deadline = new Date('2025-07-12 20:59:59');

        // Найдите элементы DOM
        const elDays = document.querySelector('.timer__days');
        const elHours = document.querySelector('.timer__hours');
        const elMinutes = document.querySelector('.timer__minutes');
        const elSeconds = document.querySelector('.timer__seconds');

        // Функция склонения числительных
        const declensionNum = (num, words) => {
            return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];
        };

        // Функция обновления таймера
        const updateTimer = () => {
            const now = new Date();
            const diff = Math.max(0, deadline - now);

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            elDays.textContent = String(days).padStart(2, '0');
            elHours.textContent = String(hours).padStart(2, '0');
            elMinutes.textContent = String(minutes).padStart(2, '0');
            elSeconds.textContent = String(seconds).padStart(2, '0');

            elDays.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
            elHours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
            elMinutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
            elSeconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);

            if (diff === 0) {
                clearInterval(timerId);
            }
        };

        // Запустите таймер
        updateTimer();
        const timerId = setInterval(updateTimer, 1000);
    });

    const swiper = new Swiper('.swiper', {
        spaceBetween: 15,
        centeredSlides: true,
        centeredSlidesBounds: true,

        breakpoints: {
            300: {
                // spaceBetween: 1,
                slidesPerView: 2
            },
            400: {
                slidesPerView: 2.5
            },
            500: {
                slidesPerView: 3.5
            },
            600: {
                slidesPerView: 4
            },
            700: {
                spaceBetween: 5,
                slidesPerView: 4.5  
            }
        }
    });
    swiper.slideTo(2)

})()

const accordionList = document.querySelectorAll('.accordion-list')

accordionList.forEach(el => {

    document.querySelector('.accordion-list__item--opened .accordion-list__content').style.maxHeight = document.querySelector('.accordion-list__item--opened .accordion-list__content').scrollHeight + 'px'

    el.addEventListener('click', (e) => {

        const accordionControl = e.target.closest('.accordion-list__control')
        if (!accordionControl) return
        const accordionItem = accordionControl.parentElement // запись родительского элемента контрола, тоесть 'accordion-list__item' 
        const accordionContent = accordionControl.nextElementSibling // тут мы выбираем следующий элемент после нашего котрола, тоесть accordion-list-content
        const accordionItems = e.currentTarget.querySelectorAll('.accordion-list__item')
        e.preventDefault()

        if (!accordionItem.classList.contains('accordion-list__item--opened')) {
            for (let i = 0; i < accordionItems.length; i++) {
                if (accordionItems[i].classList.contains('accordion-list__item--opened')) {
                    accordionItems[i].classList.remove('accordion-list__item--opened')
                    accordionItems[i].children[1].style.maxHeight = '0px'
                    
                }
            }
            accordionItem.classList.add('accordion-list__item--opened')
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'; // мы прописываем стиль для контента, так как элемент у нас 0px(max-height0px) то мы с помощью accordionContent.scrollHeight УЗНАЕМ сколько он реально занимает, а не как если бы он занимал прописанные нами 0 пикселей и мы его увеличиваем на эту высоту
        }
        else {
            accordionItem.classList.remove('accordion-list__item--opened')
            accordionContent.style.maxHeight = '0px'
        }
    })
})

const input = document.querySelectorAll('input[type="tel"]')
const im = new Inputmask('+7 (999)-999-99-99')
im.mask(input)


