
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

const btnAvatar = document.getElementById('btn-avatar');
const modalPerfil = document.getElementById('modal-perfil');
const btnFecharModal = document.getElementById('fechar-modal');

btnAvatar.addEventListener('click', () =>{
    modalPerfil.classList.add('ativo');
});

btnFecharModal.addEventListener('click', () => {
    modalPerfil.classList.remove('ativo');
});

modalPerfil.addEventListener('click', (evento) => {
    if(evento.target === modalPerfil){
        modalPerfil.classList.remove('ativo');
    }
});