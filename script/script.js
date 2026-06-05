
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

const btnIniciarCadastro = document.getElementById('btn-iniciar-cadastro');
const modalTipoCadastro = document.getElementById('modal-tipo-cadastro');
const btnFecharTipoCadastro = document.getElementById('fechar-tipo-cadastro');

if (btnIniciarCadastro) {
    btnIniciarCadastro.addEventListener('click', () => {
        modalTipoCadastro.classList.add('ativo');
    });
}

btnFecharTipoCadastro.addEventListener('click', () => {
    modalTipoCadastro.classList.remove('ativo');
});

modalTipoCadastro.addEventListener('click', (evento) => {
    if (evento.target === modalTipoCadastro){
        modalTipoCadastro.classList.remove('ativo');
    }
});

const btnEscolhaDoador = document.getElementById('btn-escolha-doador');
const btnEscolhaEmpresa = document.getElementById('btn-escolha-empresa');

btnEscolhaDoador.addEventListener('click', () => {
    modalTipoCadastro.classList.remove('ativo');
});

btnEscolhaEmpresa.addEventListener('click', () => {
    modalTipoCadastro.classList.remove('ativo');
})