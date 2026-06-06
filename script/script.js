
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

btnAvatar.addEventListener('click', () => {
    document.getElementById('modal-login').classList.add('ativo');
});

const btnIniciarCadastro = document.getElementById('btn-iniciar-cadastro');
const modalTipoCadastro = document.getElementById('modal-tipo-cadastro');

if (btnIniciarCadastro) {
    btnIniciarCadastro.addEventListener('click', () => {
        modalTipoCadastro.classList.add('ativo');
    });
}

const btnEscolhaDoador = document.getElementById('btn-escolha-doador');
const btnEscolhaEmpresa = document.getElementById('btn-escolha-empresa');

btnEscolhaDoador.addEventListener('click', () => {
    modalTipoCadastro.classList.remove('ativo');
});

btnEscolhaEmpresa.addEventListener('click', () => {
    modalTipoCadastro.classList.remove('ativo');
});

const linkMenuCadastro = document.getElementById('link-menu-cadastro');

if (linkMenuCadastro) {
    linkMenuCadastro.addEventListener('click', (evento) => {
        evento.preventDefault();

        const menuMobile = document.getElementById('menu-mobile');
        const btnMenu = document.getElementById('menu-btn');
        menuMobile.classList.remove('aberto');
        btnMenu.innerHTML = `☰`;

        modalTipoCadastro.classList.add('ativo');
    });
};

const todosBotoesFechar = document.querySelectorAll('.js-fechar-modal');

todosBotoesFechar.forEach(botao => {
    botao.addEventListener('click', function() {

        const modalPai = this.closest('.js-modal-overlay');
        if(modalPai){
            modalPai.classList.remove('ativo');
        }
    });
});

const todosModais = document.querySelectorAll('.js-modal-overlay');

todosModais.forEach(modal => {
    modal.addEventListener('click', function(evento) {
        if (evento.target === this) {
            this.classList.remove('ativo');
        }
    });
});

const modalLogin = document.getElementById('modal-login');

const linkMenuLogin = document.getElementById('link-menu-login');
if (linkMenuLogin) {
    linkMenuLogin.addEventListener('click', (evento) => {
        evento.preventDefault();
        
        const menuMobile = document.getElementById('menu-mobile');
        const btnMenu = document.getElementById('menu-btn');
        menuMobile.classList.remove('aberto');
        btnMenu.innerText = '☰';
        
        modalLogin.classList.add('ativo');
    });
}

const linkAbrirLogin = document.getElementById('link-abrir-login');
if (linkAbrirLogin) {
    linkAbrirLogin.addEventListener('click', (evento) => {
        evento.preventDefault();
        modalTipoCadastro.classList.remove('ativo'); 
        modalLogin.classList.add('ativo'); 
    });
}

const linkAbrirCadastroPeloLogin = document.getElementById('link-abrir-cadastro-pelo-login');
if (linkAbrirCadastroPeloLogin) {
    linkAbrirCadastroPeloLogin.addEventListener('click', (evento) => {
        evento.preventDefault();
        modalLogin.classList.remove('ativo'); // Esconde o login
        modalTipoCadastro.classList.add('ativo'); // Mostra as opções de cadastro
    });
}    