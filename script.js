function redirectToWhatsApp() {
    const phoneNumber = "+12988632917";  // Replace with the correct number
    const message = "Hello, I would like more information about your services.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function redirectToWebsite() {
    const websiteUrl = "https://www.yourcompany.com";  // Replace with the correct URL
    window.open(websiteUrl, '_blank');
}

const images = [
    'url("./imgs/imagem1.jpg")',
    'url("./imgs/imagem2.jpg")', // Adicione o caminho correto
    'url("./imgs/imagem3.jpg")'  // Adicione o caminho correto
];

let currentIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

// Troca de imagem a cada 5 segundos
setInterval(changeBackground, 5000);

// Inicializa com a primeira imagem
changeBackground();
