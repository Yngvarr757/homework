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

(function() {
    
    document.addEventListener('click', burgerInit)
        
    function burgerInit(e){
        
        const burgerIcon = e.target.closest('.burger-icon') // функция closest проверят, есть у элемента родитель с таким классом
        const burgerNavLink = e.target.closest('.nav__link') // она не только возвращает родителя, но и если сам эелмент является тем элементов который мы прописали

        if(!burgerIcon && !burgerNavLink) return

        if(document.documentElement.clientWidth > 900) return // если ширина окна больше 900px то мы не будем добавлять модификатор классу body

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        }else {
            document.body.classList.remove('body--opened-menu')
        }
        
    }
    
})()