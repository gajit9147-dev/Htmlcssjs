const WIN_SCORE = 5;

const userScoreEl = document.getElementById("userScore");
const compScoreEl = document.getElementById("compScore");
const drawScoreEl = document.getElementById("drawScore");
const userPickEl = document.getElementById("userPick");
const compPickEl = document.getElementById("compPick");
const messageEl = document.getElementById("message");

const resetBtn = document.getElementById("resetBtn");
const autoBtn = document.getElementById("autoBtn");

const choices = ["snake", "water", "gun"];

let userScore = 0;
let compScore = 0;
let drawScore = 0;
let gameOver = false;

function getComputerPick() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Rules:
// snake drinks water => snake beats water
// gun shoots snake => gun beats snake
// water breaks gun => water beats gun
function getResult(user, comp) {
    if (user === comp) return "draw";

    if (user === "snake" && comp === "water") return "win";
    if (user === "water" && comp === "gun") return "win";
    if (user === "gun" && comp === "snake") return "win";

    return "lose";
}

function pretty(pick) {
    if (pick === "snake") return "🐍 Snake";
    if (pick === "water") return "💧 Water";
    if (pick === "gun") return "🔫 Gun";
    return pick;
}

function updateUI() {
    userScoreEl.textContent = userScore;
    compScoreEl.textContent = compScore;
    drawScoreEl.textContent = drawScore;
}

function setMessage(text) {
    messageEl.textContent = text;
}

function endIfNeeded() {
    if (userScore >= WIN_SCORE) {
        gameOver = true;
        setMessage(`🎉 You won the match! Final: ${userScore}-${compScore}`);
    } else if (compScore >= WIN_SCORE) {
        gameOver = true;
        setMessage(`😵 Computer won the match! Final: ${userScore}-${compScore}`);
    }
}

function playRound(userPick) {
    if (gameOver) return;

    const compPick = getComputerPick();
    userPickEl.textContent = pretty(userPick);
    compPickEl.textContent = pretty(compPick);

    const result = getResult(userPick, compPick);

    if (result === "win") {
        userScore++;
        setMessage("✅ You win this round!");
    } else if (result === "lose") {
        compScore++;
        setMessage("❌ You lose this round!");
    } else {
        drawScore++;
        setMessage("🤝 It's a draw!");
    }

    updateUI();
    endIfNeeded();
}

function resetGame() {
    userScore = 0;
    compScore = 0;
    drawScore = 0;
    gameOver = false;

    userPickEl.textContent = "-";
    compPickEl.textContent = "-";
    setMessage("Make your move!");
    updateUI();
}

async function autoPlay(rounds = 10) {
    if (gameOver) return;

    autoBtn.disabled = true;
    for (let i = 0; i < rounds; i++) {
        if (gameOver) break;
        const randomUserPick = choices[Math.floor(Math.random() * choices.length)];
        playRound(randomUserPick);
        await new Promise(r => setTimeout(r, 400));
    }
    autoBtn.disabled = false;
}

document.querySelectorAll(".choice").forEach(btn => {
    btn.addEventListener("click", () => playRound(btn.dataset.pick));
});

resetBtn.addEventListener("click", resetGame);
autoBtn.addEventListener("click", () => autoPlay(10));

// init
resetGame();