const toggleButton = document.createElement('button');
toggleButton.innerText = '🌙 Dark Mode';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '20px';
toggleButton.style.right = '20px';
toggleButton.style.padding = '10px';
toggleButton.style.cursor = 'pointer';

document.body.prepend(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        toggleButton.innerText = '☀️ Light Mode';
    } else {
        toggleButton.innerText = '🌙 Dark Mode';
    }
});

const text = "Hello! I am a web developer learning HTML, CSS, and JavaScript.";
let index = 0;
const typingText = document.getElementById('typing-text');

function typeEffect() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

window.onload = typeEffect;