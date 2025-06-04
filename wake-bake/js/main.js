// (function() {
//     const burger = document.querySelector('.burger-icon')
//     const body = document.querySelector('body')
//     const list = document.querySelector('.header__list')

//     burger.addEventListener('click', () =>{
//         body.classList.toggle('body--opened-menu')
//     })

//     list.addEventListener('click', event=>{
//         if(event.target.className === 'nav__link'){
//             body.classList.toggle('body--opened-menu')
//         }
// })
// })()

(function () {

    document.addEventListener('click', burgerInit)
    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon') // функция closest проверят, есть у элемента родитель с таким классом
        const burgerNavLink = e.target.closest('.nav__link') // она не только возвращает родителя, но и если сам эелмент является тем элементов который мы прописали

        if (!burgerIcon && !burgerNavLink) return

        if (document.documentElement.clientWidth > 900) return // если ширина окна больше 900px то мы не будем добавлять модификатор классу body

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }
    //  СВАЙПЕР

})()
//  =============== modal
const button = document.querySelector('.about__img-button')
const modal = document.querySelector('.modal')

button.addEventListener('click', () => {
    document.body.classList.add('body--opened-modal')
})
modal.addEventListener('click', (event) => {
    if (event.target.className == "modal" || event.target.closest('.modal__cansel') || event.target.closest('.modal__button')) {
        document.body.classList.remove('body--opened-modal')
    }
    console.log(event.target.className)
})

// ==================== tab

const tabControls = document.querySelector('.tab__controls')

tabControls.addEventListener('click', toggle)

function toggle(e) {
    const tabControl = e.target.closest('.tab-controls__link')

    if (!tabControl) return
    e.preventDefault()
    if (tabControl.classList.contains('tab-controls__link--active')) return

    const tabId = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabId)
    const activeControl = document.querySelector('.tab-controls__link--active')
    const activeContent = document.querySelector('.tab-content--show')
    const accordionItems = document.querySelectorAll('.accordion-list__item')

    if (activeControl) {
        activeControl.classList.remove('tab-controls__link--active')
    }
    if (activeContent) {
        activeContent.classList.remove('tab-content--show')
    }

    // for(let i = 0; i < accordionItems.length; i++){
    //     if(accordionItems[i].classList.contains('accordion-list__item--opened')){
    //         accordionItems[i].classList.remove('accordion-list__item--opened')
    //         accordionItems[i].children[1].style.maxHeight = '0px'
    //     }
    // }
    tabControl.classList.add('tab-controls__link--active')
    tabContent.classList.add('tab-content--show')


}

const accordionList = document.querySelectorAll('.accordion-list')

accordionList.forEach(el => {

    document.querySelector('.accordion-list__item--opened .accordion-list-content').style.maxHeight = document.querySelector('.accordion-list__item--opened .accordion-list-content').scrollHeight + 'px'

    el.addEventListener('click', (e) => {

        const accordionControl = e.target.closest('.accordion-list__control')
        if (!accordionControl) return
        const accordionItem = accordionControl.parentElement // запись родительского элемента контрола, тоесть 'accordion-list__item' 
        const accordionContent = accordionControl.nextElementSibling // тут мы выбираем следующий элемент после нашего котрола, тоесть accordion-list-content
        const accordionItems = e.currentTarget.querySelectorAll('.accordion-list__item')

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

//  СЛАЙДЕР - ГАЛЕРЕЯ

const swiper = new Swiper('.galery__slider', {
    spaceBetween: 15,
    slidesPerView: 1.5,

    pagination: {
        el: '.galery__pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.galery__next',
        prevEl: '.galery__prev',
    },
    breakpoints: {  
        450:{
        spaceBetween: 32,
        slidesPerView: 2,
        },
        601:{
        spaceBetween: 32,
        slidesPerView: 3,
        },
        801: {
            spaceBetween: 32,
        },
        1101:{ // такой юрейкпоинт(медизапрос) действует для экранов 1101 и БОЛШЕ, а НЕ меньше как в медиазапросе, а 1 пиксель для того чтобы конфликтов не было йоу
            slidesPerView: 4,
        }
    }
});
