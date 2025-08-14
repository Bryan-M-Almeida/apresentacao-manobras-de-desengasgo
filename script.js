const iniciarApresentacao = document.querySelector('#start');
const container = document.querySelector('.container');
const iniciarBtn = document.querySelector('#btnInit');

iniciarBtn.addEventListener('click', () => {
    iniciarApresentacao.style.display = 'none';
    container.style.display = 'block';
})

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(n) {
    if (n < 0) n = slides.length - 1;
    if (n >= slides.length) n = 0;
    slides.forEach(slide => slide.classList.remove('active-slide'));
    indicators.forEach(ind => ind.classList.remove('active'));
    slides[n].classList.add('active-slide');
    indicators[n].classList.add('active');
    currentSlide = n;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function goToSlide(n) {
    showSlide(n);
}

document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

// Inicializa
showSlide(0);