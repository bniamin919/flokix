let coins = parseInt(localStorage.getItem('coins')) || 0;
let level = parseInt(localStorage.getItem('level')) || 1;
let clicks = parseInt(localStorage.getItem('clicks')) || 0;
let gameTime = parseInt(localStorage.getItem('gameTime')) || 0;
let timerInterval;
let clickPerClick = Math.pow(2, level - 1);

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('coin-count').textContent = `سکه‌ها: ${coins}`;
    document.getElementById('level').textContent = `سطح: ${level}`;
    document.getElementById('click-count').textContent = `تعداد کلیک‌ها: ${clicks}`;
    startTimer();
});

document.getElementById('click-btn').addEventListener('click', function() {
    clicks++;
    coins += clickPerClick;
    document.getElementById('coin-count').textContent = `سکه‌ها: ${coins}`;
    document.getElementById('click-count').textContent = `تعداد کلیک‌ها: ${clicks}`;
    localStorage.setItem('coins', coins);
    localStorage.setItem('clicks', clicks);
});

function startTimer() {
    timerInterval = setInterval(function() {
        gameTime++;
        document.getElementById('game-time').textContent = gameTime;
        localStorage.setItem('gameTime', gameTime);
    }, 1000);
}

// صفحه‌ها را باز کردن
function openPage(pageUrl) {
    window.location.href = pageUrl;
}
