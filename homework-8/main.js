
const btnOpen = document.querySelector('.btn-open')
const btnClose = document.querySelector('.btn__close-btn')
const modal = document.querySelector('.modal')
console.log(modal)


btnOpen.addEventListener('click', () => {
    modal.classList.add('modal--open')
    
})
modal.addEventListener('click', event => {
    if( event.target.className !== 'modal__window'){
        modal.classList.remove('modal--open')
    }
    
})




