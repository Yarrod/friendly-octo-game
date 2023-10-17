let score = 0;
let upgradeCost = 10;
let autoClickers = 0;

const clickButton = document.getElementById("clickButton");
const scoreDisplay = document.getElementById("score");
const upgradeButton = document.getElementById("upgradeButton");

clickButton.addEventListener("click", () => {
    score += 1 + autoClickers;
    updateScore();
});

upgradeButton.addEventListener("click", () => {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        autoClickers++;
        upgradeCost *= 2;
        upgradeButton.textContent = `Buy Upgrade (Cost: ${upgradeCost})`;
        updateScore();
    }
});

function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}

// Automatic score increase
setInterval(() => {
    score += autoClickers;
    updateScore();
}, 1000);