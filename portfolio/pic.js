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