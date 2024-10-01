function redirectToWhatsApp() {
    const phoneNumber = "+12988560649"; // Substitua pelo número correto
    const message = "Olá, gostaria de fazer um orçamento!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function redirectToWebsite() {
    const websiteUrl = "https://www.instagram.com/felipobalistrieri"; // URL corrigida
    window.open(websiteUrl, '_blank');
}

let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const offset = -currentSlide * 100; 
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// Adicionando event listeners aos botões após o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
    document.querySelector('.next').addEventListener('click', () => moveSlide(1));
});
