const messages = [];

messages.push("Te amo muchisimo, 💖");
messages.push("Gracias por ser mi compañero de vida, mi amor❤️");
messages.push("Eres mi persona favorita en el mundo💕");
messages.push("Juntos para siempre");
messages.push("Eres mi todo, mi amor");
messages.push("Cada momento contigo es mágico");
messages.push("Eres mi sol en los días nublados ☀️");
messages.push("Te amo más de lo que las palabras pueden expresar");
messages.push("Eres mi razón de sonreír todos los días ☀️");
messages.push("Eres mi amor eterno");
messages.push("Contigo, la vida es mejor");
messages.push("Mi corazón es tuyo");
messages.push("Eres mi sueño hecho realidad");
messages.push("Te amo con todo mi corazón");

function createTextBubble(){
    const bubble = document.createElement("div");
    bubble.className = "text-bubble";
    bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

    const left = Math.random() * 80 + 10;
    const top = Math.random() * 80 + 10;

    bubble.style.position = "absolute";
    bubble.style.left = left + "vw";
    bubble.style.top = top + "vh";

    const container = document.getElementById("bubbles-text");
    container.appendChild(bubble);

    setTimeout(() => {
        const rect = bubble.getBoundingClientRect();

        if (rect.right > window.innerWidth) {
            const newLeft = window.innerWidth - rect.width - 10;
            bubble.style.left = `${newLeft}px`;
        }

        if (rect.bottom > window.innerHeight) {
            const newTop = window.innerHeight - rect.height - 10;
            bubble.style.top = `${newTop}px`;
        }

        if (rect.left < 0) {
            bubble.style.left = "10px";
        }
    }, 10);

    setTimeout(() => {
        bubble.remove();
    }, 8000);
}

setInterval(createTextBubble, 500);