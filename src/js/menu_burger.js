let burg = document.querySelector('.burger')
burg.addEventListener('click', addMenu)
let burgMenu = document.querySelector('.burger-menu')

function addMenu() {
    burgMenu.classList.toggle("on-off");
 }