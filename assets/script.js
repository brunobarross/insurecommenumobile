const btnMobile = document.querySelector('#btnMobile');

btnMobile.addEventListener('click', function mostrarMenu(){
    const menu = document.querySelector('.menu__links');
    menu.classList.toggle('ativo');
})