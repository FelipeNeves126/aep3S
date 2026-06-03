
const btnMenu = document.getElementById('menu-btn');
const menuMobile = document.getElementById('menu-mobile');

btnMenu.addEventListener('click', () => {
menuMobile.classList.toggle('aberto');

if (menuMobile.classList.contains('aberto')) {
    btnMenu.innerText = '✕';
} else {
    btnMenu.innerText = '☰';
}
});
