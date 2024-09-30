function redirectToWhatsApp() {
    const phoneNumber = "+12988560649";  // Replace with the correct number
    const message = "Olá, gostaria de fazer um orçamento!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function redirectToWebsite() {
    const websiteUrl = "https://www.https://www.instagram.com/felipobalistrieri?igsh=MTdvcjU0OHlnNWt4Mg==.com";  // Replace with the correct URL
    window.open(websiteUrl, '_blank');
}

const images = [
    'url("./imgs/imagem1.jpg")',
    'url("./imgs/imagem2.jpg")',
    'url("./imgs/imagem3.jpg")'
];

let currentIndex = 0;

function changeBackground() {
    const imageContainer = document.querySelector('.image-container');
    imageContainer.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

// Troca de imagem a cada 5 segundos
setInterval(changeBackground, 5000);

// Inicializa com a primeira imagem
changeBackground();

