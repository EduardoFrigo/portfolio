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