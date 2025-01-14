const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const imagem = entry.target;
        if (entry.isIntersecting) {
            imagem.classList.add('entrar');
            imagem.classList.remove('sair');
        } else {
            imagem.classList.remove('entrar');
            imagem.classList.add('sair');
        }
    });
});

const foto = document.querySelector('.img-sobre .foto');
foto.classList.add('animacao-foto');
observer.observe(foto);

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navUl = document.querySelector('nav ul');

    mobileMenuBtn.addEventListener('click', function() {
        navUl.classList.toggle('show');
    });
});


function typeWrite(elemento) {
    const textoArray = elemento.innerHTML; // Obtém todo o conteúdo, incluindo as tags HTML.
    elemento.innerHTML = ''; // Limpa o conteúdo do elemento.

    let i = 0;

    function escrever() {
        // Adiciona o próximo caractere ao HTML do elemento.
        elemento.innerHTML = textoArray.slice(0, i);
        i++;

        if (i <= textoArray.length) {
            setTimeout(escrever, 55); // Ajuste o tempo para acelerar ou desacelerar o efeito.
        }
    }

    escrever(); // Inicia o efeito.
}

const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);