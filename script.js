let wordSet = new Set();

fetch('sowpods.txt')
    .then(response => response.text())
    .then(text => {
        wordSet = new Set(text.split('\n').map(w => w.trim().toUpperCase()));
    });

function checkWord() {
    const word = document.getElementById('wordInput').value.trim().toUpperCase();
    const result = document.getElementById('result');
    if (word === '') {
        result.textContent = '';
        return;
    }
    if (wordSet.has(word)) {
        result.textContent = `"${word}" is a valid Scrabble word! 🎉`;
        result.style.color = 'white';
    } else {
        result.textContent = `"${word}" is not a valid Scrabble word. 💩`;
        result.style.color = 'white';
    }
}