let coins = parseInt(localStorage.getItem('coins')) || 0;
let level = parseInt(localStorage.getItem('level')) || 1;
let autoClaimActivated = false;
let boostTimeActivated = false;

// Show saved values on the page
document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById('coin-count')) {
        document.getElementById('coin-count').textContent = coins;
    }
    if (document.getElementById('level')) {
        document.getElementById('level').textContent = level;
    }
});

// Upgrade to next level
function upgradeLevel() {
    const levelCosts = [500, 10000, 50000, 100000, 500000, 1000000, 3000000];
    if (level < levelCosts.length) {
        let cost = levelCosts[level - 1];
        if (coins >= cost) {
            coins -= cost;
            level++;
            document.getElementById('coin-count').textContent = coins;
            document.getElementById('level').textContent = level;
            localStorage.setItem('coins', coins);
            localStorage.setItem('level', level);
        } else {
            alert("Not enough coins to upgrade.");
        }
    } else {
        alert("You have reached the maximum level.");
    }
}

// Activate Auto Claim
function activateAutoClaim(cost) {
    if (coins >= cost && !autoClaimActivated) {
        coins -= cost;
        autoClaimActivated = true;
        document.getElementById('coin-count').textContent = coins;
        alert("Auto Claim activated! You'll earn 30,000 coins every 24 hours.");
        localStorage.setItem('coins', coins);
        localStorage.setItem('autoClaimActivated', autoClaimActivated);
    } else {
        alert("Not enough coins or Auto Claim already activated.");
    }
}

// Activate BoostTime
function activateBoostTime(cost) {
    if (coins >= cost && !boostTimeActivated) {
        coins -= cost;
        boostTimeActivated = true;
        document.getElementById('coin-count').textContent = coins;
        alert("BoostTime activated! You'll earn double coins for 1 minute.");
        localStorage.setItem('coins', coins);
        localStorage.setItem('boostTimeActivated', boostTimeActivated);
        startBoostTime();
    } else {
        alert("Not enough coins or BoostTime already activated.");
    }
}

// Start BoostTime timer
function startBoostTime() {
    setTimeout(() => {
        boostTimeActivated = false;
        alert("BoostTime expired. You will no longer earn double coins.");
        localStorage.setItem('boostTimeActivated', boostTimeActivated);
    }, 60000); // 60 seconds (1 minute)
}

// Function to handle the coin increment when clicking on the image
document.getElementById('clickable-image').addEventListener('click', function() {
    // Multiply the coins per click based on the current level
    let coinsPerClick = 1;
    if (level > 1) {
        coinsPerClick = Math.pow(2, level - 1); // Double the coins per click with each level
    }
    
    coins += coinsPerClick; // Add the calculated coins to the total
    document.getElementById('coin-count').textContent = coins; // Update the displayed coin count
    localStorage.setItem('coins', coins); // Save coins to localStorage
});

// Function to open a new page
function openPage(pageUrl) {
    window.location.href = pageUrl;
}
