const iconac = document.querySelector('#nav-icon-ac')
const iconbagla = document.querySelector('#nav-icon-bagla')
const menu = document.querySelector('#menu')

function ac(){
    menu.style.display = 'block'
    iconac.style.display = 'none'
    iconbagla.style.display = 'block'
}
function bagla(){
    menu.style.display = 'none'
    iconbagla.style.display = 'none'
    iconac.style.display = 'block'
}

const modal = document.querySelector('#modal-container')

function modalAc() {
    modal.style.display = 'initial'
}
function modalBagla() {
    modal.style.display = 'none'
}