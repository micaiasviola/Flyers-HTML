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
