/* =========================================================
   HIDDEN THRILL
   ========================================================= */


/* =========================
   TRANSLATIONS
   ========================= */

const translations = {

    en: {
        tagline: "Every Card Hides a Surprise",
        language: "Language",
        welcome: "Welcome to Hidden Thrill",
        chooseGame: "Choose your game and discover what is hidden.",
        game1: "Game 1",
        game1Desc: "Lucky cards, mystery rewards and the final Winner Cup.",
        game2: "Game 2",
        game2Desc: "A new hidden challenge is coming soon.",
        playNow: "Play Now",
        arrivingSoon: "Arriving Soon",
        history: "History",
        rules: "Rules",
        back: "Back",
        gameSetup: "Game Setup",
        enterPlayers: "Enter player names to begin.",
        numberOfPlayers: "Number of Players",
        startGame: "Start Game",
        currentTurn: "Current Turn",
        leaderboard: "Leaderboard",
        home: "Home",
        newGame: "New Game",
        exit: "Exit",
        winner: "WINNER",
        clearHistory: "Clear History",

        level1: "LEVEL 1",
        luckyStart: "LUCKY START",
        level1Rules: "60 hidden cards. Select a card to reveal a positive number and add it to your score.",

        level2: "LEVEL 2",
        negativeZone: "NEGATIVE ZONE",
        level2Rules: "32 hidden cards. Every card contains a negative value that decreases your score.",

        level3: "LEVEL 3",
        mysteryCards: "MYSTERY CARDS",
        level3Rules: "16 hidden cards. 8 contain scoring numbers and 8 are empty cards worth 0.",

        level4: "LEVEL 4",
        treasureVault: "TREASURE VAULT",
        level4Rules: "8 hidden cards. 4 Gold cards give +300 and 4 Silver cards give +150.",

        level5: "LEVEL 5",
        winnerCup: "WINNER CUP",
        level5Rules: "Three hidden cards. One contains the Winner Cup and two are empty.",

        selectCard: "Select a hidden card.",
        selected: "selected",
        points: "points",
        gold: "Gold",
        silver: "Silver",
        empty: "Empty",
        zero: "0",

        level2Begins: "LEVEL 2 BEGINS",
        level3Begins: "LEVEL 3 BEGINS",
        level4Begins: "LEVEL 4 BEGINS",
        level5Begins: "LEVEL 5 BEGINS",

        nextLevel: "Get ready for the next level.",
        finalists: "Finalists",
        eliminated: "Eliminated",
        chooseWinnerCup: "Choose a card to find the Winner Cup.",
        firstFinalistTurn: "Finalist with the higher score chooses first.",
        secondFinalistTurn: "Second finalist chooses now.",
        finalChoice: "Final choice!",
        winnerCupFound: "Winner Cup found!",
        winnerByScore: "Winner decided by the highest score.",
        gameComplete: "Game Complete",
        noHistory: "No games played yet.",
        arrivingMessage: "Game 2 is coming soon.",

        rulesTitle1: "Game 1",
        rulesText1: "Game 1 has five levels for four players. Two-player games finish after Level 4.",
        rulesTitle2: "Turn Order",
        rulesText2: "Players always take turns in registration order: A → B → C → D. Every player gets equal chances.",
        rulesTitle3: "Level 5",
        rulesText3: "Only the top two players after Level 4 enter Level 5. The Winner Cup decides the final winner.",
        rulesTitle4: "Leaderboard",
        rulesText4: "Leaderboard positions stay in the original player order. Scores update without changing the displayed order."
    },

    te: {
        tagline: "ప్రతి కార్డులో ఒక ఆశ్చర్యం దాగి ఉంటుంది",
        language: "భాష",
        welcome: "Hidden Thrill కు స్వాగతం",
        chooseGame: "గేమ్ ఎంచుకుని దాగి ఉన్నదాన్ని కనుగొనండి.",
        game1: "గేమ్ 1",
        game1Desc: "లక్కీ కార్డులు, మిస్టరీ రివార్డులు మరియు చివరి Winner Cup.",
        game2: "గేమ్ 2",
        game2Desc: "కొత్త హిడెన్ ఛాలెంజ్ త్వరలో వస్తుంది.",
        playNow: "ఇప్పుడే ఆడండి",
        arrivingSoon: "త్వరలో వస్తుంది",
        history: "చరిత్ర",
        rules: "నియమాలు",
        back: "వెనక్కి",
        gameSetup: "గేమ్ సెటప్",
        enterPlayers: "ప్రారంభించడానికి ప్లేయర్ పేర్లు నమోదు చేయండి.",
        numberOfPlayers: "ప్లేయర్ల సంఖ్య",
        startGame: "గేమ్ ప్రారంభించండి",
        currentTurn: "ప్రస్తుత టర్న్",
        leaderboard: "లీడర్‌బోర్డ్",
        home: "హోమ్",
        newGame: "కొత్త గేమ్",
        exit: "నిష్క్రమించండి",
        winner: "విజేత",
        clearHistory: "చరిత్రను తొలగించండి",

        level1: "లెవెల్ 1",
        luckyStart: "లక్కీ స్టార్ట్",
        level1Rules: "60 దాగి ఉన్న కార్డులు. కార్డును ఎంచుకుని పాజిటివ్ నంబర్‌ను పొందండి.",

        level2: "లెవెల్ 2",
        negativeZone: "నెగెటివ్ జోన్",
        level2Rules: "32 దాగి ఉన్న కార్డులు. ప్రతి కార్డు మీ స్కోర్‌ను తగ్గించే నెగెటివ్ విలువను కలిగి ఉంటుంది.",

        level3: "లెవెల్ 3",
        mysteryCards: "మిస్టరీ కార్డులు",
        level3Rules: "16 దాగి ఉన్న కార్డులు. 8 స్కోరింగ్ నంబర్లు మరియు 8 ఖాళీ కార్డులు ఉంటాయి.",

        level4: "లెవెల్ 4",
        treasureVault: "ట్రెజర్ వాల్ట్",
        level4Rules: "8 దాగి ఉన్న కార్డులు. 4 Gold కార్డులు +300, 4 Silver కార్డులు +150 ఇస్తాయి.",

        level5: "లెవెల్ 5",
        winnerCup: "విన్నర్ కప్",
        level5Rules: "3 దాగి ఉన్న కార్డులు. ఒక కార్డులో Winner Cup మరియు రెండు ఖాళీ కార్డులు ఉంటాయి.",

        selectCard: "దాగి ఉన్న కార్డును ఎంచుకోండి.",
        selected: "ఎంచుకున్నారు",
        points: "పాయింట్లు",
        gold: "గోల్డ్",
        silver: "సిల్వర్",
        empty: "ఖాళీ",
        zero: "0",

        level2Begins: "లెవెల్ 2 ప్రారంభం",
        level3Begins: "లెవెల్ 3 ప్రారంభం",
        level4Begins: "లెవెల్ 4 ప్రారంభం",
        level5Begins: "లెవెల్ 5 ప్రారంభం",

        nextLevel: "తదుపరి లెవెల్‌కు సిద్ధంగా ఉండండి.",
        finalists: "ఫైనలిస్టులు",
        eliminated: "ఎలిమినేట్",
        chooseWinnerCup: "Winner Cup కోసం కార్డును ఎంచుకోండి.",
        firstFinalistTurn: "ఎక్కువ స్కోర్ ఉన్న ఫైనలిస్ట్ ముందుగా ఎంచుకుంటారు.",
        secondFinalistTurn: "రెండవ ఫైనలిస్ట్ ఇప్పుడు ఎంచుకోవాలి.",
        finalChoice: "చివరి ఎంపిక!",
        winnerCupFound: "Winner Cup దొరికింది!",
        winnerByScore: "అత్యధిక స్కోర్ ద్వారా విజేత నిర్ణయించబడింది.",
        gameComplete: "గేమ్ పూర్తయింది",
        noHistory: "ఇంకా గేమ్స్ ఆడలేదు.",
        arrivingMessage: "గేమ్ 2 త్వరలో వస్తుంది.",

        rulesTitle1: "గేమ్ 1",
        rulesText1: "నలుగురు ప్లేయర్ల గేమ్‌లో 5 లెవెల్స్ ఉంటాయి. ఇద్దరు ప్లేయర్ల గేమ్ Level 4 తర్వాత ముగుస్తుంది.",
        rulesTitle2: "టర్న్ ఆర్డర్",
        rulesText2: "రిజిస్ట్రేషన్ ఆర్డర్‌లోనే టర్న్స్ ఉంటాయి: A → B → C → D. ప్రతి ప్లేయర్‌కు సమాన అవకాశాలు ఉంటాయి.",
        rulesTitle3: "లెవెల్ 5",
        rulesText3: "Level 4 తర్వాత టాప్ 2 ప్లేయర్లు మాత్రమే Level 5కి వెళ్తారు. Winner Cup తుది విజేతను నిర్ణయిస్తుంది.",
        rulesTitle4: "లీడర్‌బోర్డ్",
        rulesText4: "లీడర్‌బోర్డ్ ప్లేయర్ ఆర్డర్ ఎప్పటికీ మారదు. స్కోర్ మాత్రమే మారుతుంది."
    },

    hi: {
        tagline: "हर कार्ड में एक सरप्राइज छिपा है",
        language: "भाषा",
        welcome: "Hidden Thrill में आपका स्वागत है",
        chooseGame: "गेम चुनें और छिपी हुई चीज़ खोजें।",
        game1: "गेम 1",
        game1Desc: "लकी कार्ड, मिस्ट्री रिवॉर्ड और अंतिम Winner Cup.",
        game2: "गेम 2",
        game2Desc: "एक नया हिडन चैलेंज जल्द आ रहा है।",
        playNow: "अभी खेलें",
        arrivingSoon: "जल्द आ रहा है",
        history: "इतिहास",
        rules: "नियम",
        back: "वापस",
        gameSetup: "गेम सेटअप",
        enterPlayers: "शुरू करने के लिए खिलाड़ियों के नाम दर्ज करें।",
        numberOfPlayers: "खिलाड़ियों की संख्या",
        startGame: "गेम शुरू करें",
        currentTurn: "वर्तमान टर्न",
        leaderboard: "लीडरबोर्ड",
        home: "होम",
        newGame: "नया गेम",
        exit: "बाहर निकलें",
        winner: "विजेता",
        clearHistory: "इतिहास साफ करें",

        level1: "लेवल 1",
        luckyStart: "लकी स्टार्ट",
        level1Rules: "60 छिपे हुए कार्ड। कार्ड चुनें और पॉजिटिव नंबर प्राप्त करके अपने स्कोर में जोड़ें।",

        level2: "लेवल 2",
        negativeZone: "नेगेटिव ज़ोन",
        level2Rules: "32 छिपे हुए कार्ड। हर कार्ड आपके स्कोर को कम करने वाला नेगेटिव मूल्य रखता है।",

        level3: "लेवल 3",
        mysteryCards: "मिस्ट्री कार्ड",
        level3Rules: "16 छिपे हुए कार्ड। 8 में स्कोरिंग नंबर और 8 खाली कार्ड हैं।",

        level4: "लेवल 4",
        treasureVault: "ट्रेज़र वॉल्ट",
        level4Rules: "8 छिपे हुए कार्ड। 4 Gold कार्ड +300 और 4 Silver कार्ड +150 देते हैं।",

        level5: "लेवल 5",
        winnerCup: "विनर कप",
        level5Rules: "3 छिपे हुए कार्ड। एक में Winner Cup और दो खाली कार्ड हैं।",

        selectCard: "एक छिपा हुआ कार्ड चुनें।",
        selected: "चयनित",
        points: "पॉइंट्स",
        gold: "गोल्ड",
        silver: "सिल्वर",
        empty: "खाली",
        zero: "0",

        level2Begins: "लेवल 2 शुरू",
        level3Begins: "लेवल 3 शुरू",
        level4Begins: "लेवल 4 शुरू",
        level5Begins: "लेवल 5 शुरू",

        nextLevel: "अगले लेवल के लिए तैयार रहें।",
        finalists: "फाइनलिस्ट",
        eliminated: "एलिमिनेट",
        chooseWinnerCup: "Winner Cup खोजने के लिए कार्ड चुनें।",
        firstFinalistTurn: "अधिक स्कोर वाला फाइनलिस्ट पहले चुनेगा।",
        secondFinalistTurn: "दूसरा फाइनलिस्ट अब चुनेगा।",
        finalChoice: "अंतिम चुनाव!",
        winnerCupFound: "Winner Cup मिल गया!",
        winnerByScore: "सबसे अधिक स्कोर से विजेता तय हुआ।",
        gameComplete: "गेम पूरा हुआ",
        noHistory: "अभी तक कोई गेम नहीं खेला गया।",
        arrivingMessage: "गेम 2 जल्द आ रहा है।",

        rulesTitle1: "गेम 1",
        rulesText1: "चार खिलाड़ियों के गेम में 5 लेवल होते हैं। दो खिलाड़ियों का गेम Level 4 के बाद समाप्त होता है।",
        rulesTitle2: "टर्न ऑर्डर",
        rulesText2: "टर्न रजिस्ट्रेशन ऑर्डर में होंगे: A → B → C → D. सभी खिलाड़ियों को बराबर मौके मिलेंगे।",
        rulesTitle3: "लेवल 5",
        rulesText3: "Level 4 के बाद केवल टॉप 2 खिलाड़ी Level 5 में जाएंगे। Winner Cup अंतिम विजेता तय करेगा।",
        rulesTitle4: "लीडरबोर्ड",
        rulesText4: "लीडरबोर्ड में खिलाड़ियों का क्रम नहीं बदलेगा। केवल स्कोर अपडेट होगा।"
    }
};


/* =========================
   LANGUAGE
   ========================= */

let currentLanguage = localStorage.getItem("hiddenThrillLanguage") || "en";

function t(key) {
    return translations[currentLanguage][key] || translations.en[key] || key;
}

function applyLanguage() {

    document.documentElement.lang = currentLanguage;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");

        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });

    updateRulesContent();

    if (gameStarted) {
        updateLevelUI();
        updateLeaderboard();
        updateTurnDisplay();
        updateGameMessage();
    }
}

document.getElementById("languageSelect").value = currentLanguage;

document.getElementById("languageSelect").addEventListener("change", function () {
    currentLanguage = this.value;
    localStorage.setItem("hiddenThrillLanguage", currentLanguage);
    applyLanguage();
});


/* =========================
   PAGE ELEMENTS
   ========================= */

const homePage = document.getElementById("homePage");
const setupPage = document.getElementById("setupPage");
const gamePage = document.getElementById("gamePage");

const game1Btn = document.getElementById("game1Btn");
const game2Btn = document.getElementById("game2Btn");

const setupBackBtn = document.getElementById("setupBackBtn");
const startGameBtn = document.getElementById("startGameBtn");
const playerInputs = document.getElementById("playerInputs");
const setupError = document.getElementById("setupError");

const playerCountButtons = document.querySelectorAll(".player-count-btn");

const gameExitBtn = document.getElementById("gameExitBtn");
const gameRulesBtn = document.getElementById("gameRulesBtn");
const newGameBtn = document.getElementById("newGameBtn");

const bottomHomeBtn = document.getElementById("bottomHomeBtn");
const bottomNewGameBtn = document.getElementById("bottomNewGameBtn");

const leaderboard = document.getElementById("leaderboard");
const currentTurn = document.getElementById("currentTurn");

const levelNumber = document.getElementById("levelNumber");
const levelTitle = document.getElementById("levelTitle");
const levelRules = document.getElementById("levelRules");

const cardsGrid = document.getElementById("cardsGrid");
const gameMessage = document.getElementById("gameMessage");

const transitionOverlay = document.getElementById("transitionOverlay");
const transitionLevel = document.getElementById("transitionLevel");
const transitionTitle = document.getElementById("transitionTitle");
const transitionRules = document.getElementById("transitionRules");
const countdownNumber = document.getElementById("countdownNumber");
const transitionMessage = document.getElementById("transitionMessage");

const winnerOverlay = document.getElementById("winnerOverlay");
const winnerName = document.getElementById("winnerName");
const winnerScore = document.getElementById("winnerScore");

const winnerNewGameBtn = document.getElementById("winnerNewGameBtn");
const winnerHomeBtn = document.getElementById("winnerHomeBtn");

const rulesModal = document.getElementById("rulesModal");
const closeRulesBtn = document.getElementById("closeRulesBtn");

const historyModal = document.getElementById("historyModal");
const historyContent = document.getElementById("historyContent");
const historyBtn = document.getElementById("historyBtn");
const closeHistoryBtn = document.getElementById("closeHistoryBtn");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

const homeRulesBtn = document.getElementById("homeRulesBtn");


/* =========================
   GAME STATE
   ========================= */

let players = [];

let playerCount = 2;

let currentLevel = 1;

let currentPlayerIndex = 0;

let cards = [];

let selectedCards = 0;

let gameStarted = false;

let gameNumber = 1;

let gameStartTime = null;

let finalists = [];

let level5CurrentIndex = 0;

let level5Selections = 0;

let historySaved = false;

let timers = [];

let transitionSession = 0;


/* =========================
   BASIC UTILITIES
   ========================= */

function clearAllTimers() {

    timers.forEach(timer => {
        clearTimeout(timer);
        clearInterval(timer);
    });

    timers = [];
}

function addTimer(timer) {
    timers.push(timer);
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {

    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

function showPage(page) {

    homePage.classList.remove("active");
    setupPage.classList.remove("active");
    gamePage.classList.remove("active");

    page.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}


/* =========================
   GAME SETUP
   ========================= */

playerCountButtons.forEach(button => {

    button.addEventListener("click", function () {

        playerCount = Number(this.dataset.count);

        playerCountButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        createPlayerInputs();
    });

});


function createPlayerInputs() {

    playerInputs.innerHTML = "";

    for (let i = 0; i < playerCount; i++) {

        const row = document.createElement("div");

        row.className = "player-input-row";

        row.innerHTML = `
            <div class="player-badge">${String.fromCharCode(65 + i)}</div>
            <input 
                type="text"
                class="player-name-input"
                maxlength="20"
                placeholder="Player ${String.fromCharCode(65 + i)}"
            >
        `;

        playerInputs.appendChild(row);
    }
}


function openSetup() {

    playerCount = 2;

    playerCountButtons.forEach(button => {

        button.classList.toggle(
            "active",
            Number(button.dataset.count) === 2
        );

    });

    createPlayerInputs();

    setupError.textContent = "";

    showPage(setupPage);
}


function validatePlayerNames() {

    const inputs = document.querySelectorAll(".player-name-input");

    const names = [];

    for (const input of inputs) {

        const name = input.value.trim();

        if (!name) {
            setupError.textContent = "Please enter all player names.";
            return null;
        }

        if (name.length < 1) {
            setupError.textContent = "Player names cannot be empty.";
            return null;
        }

        names.push(name);
    }

    const normalized = names.map(name => name.toLowerCase());

    if (new Set(normalized).size !== normalized.length) {
        setupError.textContent = "Player names must be different.";
        return null;
    }

    setupError.textContent = "";

    return names;
}


/* =========================
   START GAME
   ========================= */

function startGame(names) {

    clearAllTimers();

    transitionSession++;

    gameStarted = true;

    gameStartTime = new Date();

    historySaved = false;

    currentLevel = 1;

    currentPlayerIndex = 0;

    selectedCards = 0;

    finalists = [];

    level5CurrentIndex = 0;

    level5Selections = 0;

    players = names.map((name, index) => {

        return {
            name: name,
            score: 0,
            eliminated: false,
            robot: false,
            level5Place: null,
            registrationOrder: index
        };

    });

    gameNumber = getNextGameNumber();

    document.body.classList.remove("winner-open");

    winnerOverlay.classList.add("hidden");

    transitionOverlay.classList.add("hidden");

    showPage(gamePage);

    createLevel1();

    updateLeaderboard();

    updateTurnDisplay();

    updateGameMessage();
}


function getNextGameNumber() {

    const username = localStorage.getItem("currentUser");

    if (!username) {
        return 1;
    }

    const users = JSON.parse(
        localStorage.getItem("7yuqps") || "[]"
    );

    const user = users.find(
        item => item.username === username
    );

    if (!user || !Array.isArray(user.history)) {
        return 1;
    }

    return user.history.length + 1;
}


startGameBtn.addEventListener("click", function () {

    const names = validatePlayerNames();

    if (!names) {
        return;
    }

    startGame(names);
});


/* =========================
   LEVEL UI
   ========================= */

function updateLevelUI() {

    const levelData = {

        1: {
            number: t("level1"),
            title: t("luckyStart"),
            rules: t("level1Rules"),
            color: "#F4B400"
        },

        2: {
            number: t("level2"),
            title: t("negativeZone"),
            rules: t("level2Rules"),
            color: "#6558C8"
        },

        3: {
            number: t("level3"),
            title: t("mysteryCards"),
            rules: t("level3Rules"),
            color: "#9B59B6"
        },

        4: {
            number: t("level4"),
            title: t("treasureVault"),
            rules: t("level4Rules"),
            color: "#D4A017"
        },

        5: {
            number: t("level5"),
            title: t("winnerCup"),
            rules: t("level5Rules"),
            color: "#E67E22"
        }

    };

    const data = levelData[currentLevel];

    levelNumber.textContent = data.number;

    levelTitle.textContent = data.title;

    levelRules.textContent = data.rules;

    document.querySelector(".level-panel").style.borderTopColor = data.color;
}


/* =========================
   LEADERBOARD
   ========================= */

function updateLeaderboard() {

    leaderboard.innerHTML = "";

    /*
       IMPORTANT:
       Do NOT sort players here.

       Players always stay in registration order.
    */

    players.forEach((player, index) => {

        const row = document.createElement("div");

        row.className = "leader-row";

        if (player.eliminated) {
            row.classList.add("eliminated");
        }

        row.innerHTML = `
            <div class="leader-position">
                ${index + 1}
            </div>

            <div class="leader-info">
                <div class="leader-name">
                    ${escapeHTML(player.name)}
                </div>

                <div class="leader-score">
                    ${player.score} ${t("points")}
                </div>
            </div>
        `;

        leaderboard.appendChild(row);
    });
}


function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


/* =========================
   TURN SYSTEM
   ========================= */

function updateTurnDisplay() {

    if (!players.length) {
        return;
    }

    const player = players[currentPlayerIndex];

    if (!player) {
        return;
    }

    currentTurn.textContent = player.name;
}


function moveToNextPlayer() {

    if (!players.length) {
        return;
    }

    /*
       Fixed registration order.

       2 players:
       A → B → A → B

       4 players:
       A → B → C → D → A...
    */

    currentPlayerIndex =
        (currentPlayerIndex + 1) % players.length;

    updateTurnDisplay();
}


/* =========================
   GAME MESSAGE
   ========================= */

function updateGameMessage(message = null) {

    if (message !== null) {

        gameMessage.textContent = message;

        return;
    }

    gameMessage.textContent = t("selectCard");
}


/* =========================
   LEVEL 1
   ========================= */

function createLevel1() {

    currentLevel = 1;

    selectedCards = 0;

    currentPlayerIndex = 0;

    cards = [];

    for (let i = 0; i < 60; i++) {

        cards.push({
            value: randomInt(10, 100),
            type: "number",
            revealed: false
        });

    }

    renderCards();

    updateLevelUI();

    updateTurnDisplay();

    updateGameMessage();
}


/* =========================
   LEVEL 2
   ========================= */

function createLevel2() {

    currentLevel = 2;

    selectedCards = 0;

    currentPlayerIndex = 0;

    cards = [];

    for (let i = 0; i < 32; i++) {

        cards.push({
            value: -randomInt(10, 100),
            type: "number",
            revealed: false
        });

    }

    renderCards();

    updateLevelUI();

    updateTurnDisplay();

    updateGameMessage();
}


/* =========================
   LEVEL 3
   ========================= */

function createLevel3() {

    currentLevel = 3;

    selectedCards = 0;

    currentPlayerIndex = 0;

    cards = [];

    const numbers = [];

    for (let i = 0; i < 8; i++) {

        numbers.push({
            value: randomInt(20, 120),
            type: "number",
            revealed: false
        });

    }

    const emptyCards = [];

    for (let i = 0; i < 8; i++) {

        emptyCards.push({
            value: 0,
            type: "empty",
            revealed: false
        });

    }

    cards = shuffle([
        ...numbers,
        ...emptyCards
    ]);

    renderCards();

    updateLevelUI();

    updateTurnDisplay();

    updateGameMessage();
}


/* =========================
   LEVEL 4
   ========================= */

function createLevel4() {

    currentLevel = 4;

    selectedCards = 0;

    currentPlayerIndex = 0;

    cards = [];

    const rewards = [

        {
            value: 300,
            type: "gold",
            revealed: false
        },

        {
            value: 300,
            type: "gold",
            revealed: false
        },

        {
            value: 300,
            type: "gold",
            revealed: false
        },

        {
            value: 300,
            type: "gold",
            revealed: false
        },

        {
            value: 150,
            type: "silver",
            revealed: false
        },

        {
            value: 150,
            type: "silver",
            revealed: false
        },

        {
            value: 150,
            type: "silver",
            revealed: false
        },

        {
            value: 150,
            type: "silver",
            revealed: false
        }

    ];

    cards = shuffle(rewards);

    renderCards();

    updateLevelUI();

    updateTurnDisplay();

    updateGameMessage();
}


/* =========================
   RENDER CARDS
   ========================= */

function renderCards() {

    cardsGrid.innerHTML = "";

    cardsGrid.className = "cards-grid";

    if (currentLevel === 2) {
        cardsGrid.classList.add("level-2");
    }

    if (currentLevel === 3) {
        cardsGrid.classList.add("level-3");
    }

    if (currentLevel === 4) {
        cardsGrid.classList.add("level-4");
    }

    if (currentLevel === 5) {
        cardsGrid.classList.add("level-5");
    }

    cards.forEach((card, index) => {

        const button = document.createElement("button");

        button.className = "game-card-item";

        button.dataset.index = index;

        /*
           Plain hidden box.
           No question mark.
        */

        if (card.revealed) {

            button.classList.add("revealed");

            let label = "";

            if (card.type === "gold") {
                label = t("gold");
            }

            else if (card.type === "silver") {
                label = t("silver");
            }

            else if (card.type === "empty") {
                label = t("empty");
            }

            else {
                label = t("points");
            }

            button.innerHTML = `
                <span class="card-value">
                    ${card.value}
                </span>

                <span class="card-label">
                    ${label}
                </span>
            `;

            button.disabled = true;

        }

        else {

            button.innerHTML = "";

            button.disabled = false;

            button.addEventListener("click", function () {
                selectCard(index);
            });

        }

        cardsGrid.appendChild(button);
    });
}


/* =========================
   SELECT CARD
   ========================= */

function selectCard(index) {

    if (!gameStarted) {
        return;
    }

    if (currentLevel === 5) {
        selectLevel5Card(index);
        return;
    }

    const card = cards[index];

    if (!card || card.revealed) {
        return;
    }

    /*
       Only the current player can select.
       Turn order is fixed registration order.
    */

    const player = players[currentPlayerIndex];

    if (!player || player.eliminated) {
        return;
    }

    card.revealed = true;

    selectedCards++;

    player.score += card.value;

    updateLeaderboard();

    renderCards();

    announceValue(card);

    let message = "";

    if (currentLevel === 1) {

        message =
            `${player.name}: +${card.value} ${t("points")}`;

    }

    else if (currentLevel === 2) {

        message =
            `${player.name}: ${card.value} ${t("points")}`;

    }

    else if (currentLevel === 3) {

        if (card.type === "empty") {

            message =
                `${player.name}: ${t("empty")} - 0`;

        }

        else {

            message =
                `${player.name}: +${card.value} ${t("points")}`;

        }

    }

    else if (currentLevel === 4) {

        message =
            `${player.name}: +${card.value} ${t(card.type)}`;

    }

    updateGameMessage(message);

    if (selectedCards >= cards.length) {

        scheduleLevelComplete();

        return;
    }

    moveToNextPlayer();
}


/* =========================
   VOICE
   ========================= */

function announceValue(card) {

    if (!("speechSynthesis" in window)) {
        return;
    }

    let text = "";

    if (card.type === "empty") {
        text = "0";
    }

    else {
        text = String(Math.abs(card.value));
    }

    const speech = new SpeechSynthesisUtterance(text);

    if (currentLanguage === "te") {
        speech.lang = "te-IN";
    }

    else if (currentLanguage === "hi") {
        speech.lang = "hi-IN";
    }

    else {
        speech.lang = "en-IN";
    }

    speech.rate = 0.9;

    window.speechSynthesis.cancel();

    window.speechSynthesis.speak(speech);
}


/* =========================
   LEVEL TRANSITION
   ========================= */

function scheduleLevelComplete() {

    clearAllTimers();

    const session = transitionSession;

    const timer = setTimeout(() => {

        if (session !== transitionSession) {
            return;
        }

        /*
           TWO PLAYER GAME:
           Stop after Level 4.
        */

        if (
            players.length === 2 &&
            currentLevel === 4
        ) {

            finishTwoPlayerGame();

            return;
        }

        /*
           FOUR PLAYER GAME:
           Level 4 → Level 5
        */

        if (currentLevel === 4) {

            prepareLevel5();

            return;
        }

        startNextLevel();

    }, 5000);

    addTimer(timer);
}


function startNextLevel() {

    if (currentLevel >= 5) {
        return;
    }

    const nextLevel = currentLevel + 1;

    showTransition(nextLevel);
}


function showTransition(nextLevel) {

    const session = transitionSession;

    transitionOverlay.classList.remove("hidden");

    transitionLevel.textContent =
        getLevelNumberText(nextLevel);

    transitionTitle.textContent =
        getLevelTitle(nextLevel);

    transitionRules.textContent =
        getLevelRules(nextLevel);

    transitionMessage.textContent =
        t("nextLevel");

    let count = 5;

    countdownNumber.textContent = count;

    const interval = setInterval(() => {

        if (session !== transitionSession) {

            clearInterval(interval);

            return;
        }

        count--;

        countdownNumber.textContent = count;

        if (count <= 0) {

            clearInterval(interval);

            transitionOverlay.classList.add("hidden");

            if (nextLevel === 2) {
                createLevel2();
            }

            else if (nextLevel === 3) {
                createLevel3();
            }

            else if (nextLevel === 4) {
                createLevel4();
            }

            else if (nextLevel === 5) {
                createLevel5();
            }

        }

    }, 1000);

    timers.push(interval);
}


function getLevelNumberText(level) {

    if (level === 2) return t("level2");

    if (level === 3) return t("level3");

    if (level === 4) return t("level4");

    if (level === 5) return t("level5");

    return t("level1");
}


function getLevelTitle(level) {

    if (level === 2) return t("negativeZone");

    if (level === 3) return t("mysteryCards");

    if (level === 4) return t("treasureVault");

    if (level === 5) return t("winnerCup");

    return t("luckyStart");
}


function getLevelRules(level) {

    if (level === 2) return t("level2Rules");

    if (level === 3) return t("level3Rules");

    if (level === 4) return t("level4Rules");

    if (level === 5) return t("level5Rules");

    return t("level1Rules");
}


/* =========================
   TWO PLAYER FINISH
   ========================= */

function finishTwoPlayerGame() {

    clearAllTimers();

    /*
       Determine winner by highest score.

       Tie:
       original registration order wins
       because both players had equal chances.
    */

    let winner = players[0];

    for (let i = 1; i < players.length; i++) {

        if (players[i].score > winner.score) {
            winner = players[i];
        }

    }

    players.forEach(player => {

        player.eliminated =
            player !== winner;

    });

    updateLeaderboard();

    finishGame(winner);
}


/* =========================
   LEVEL 5
   ========================= */

function prepareLevel5() {

    /*
       Select top two by score internally.
       Leaderboard display is NOT sorted.
    */

    const ranking = [...players].sort((a, b) => {

        if (b.score !== a.score) {
            return b.score - a.score;
        }

        return a.registrationOrder - b.registrationOrder;

    });

    finalists = ranking.slice(0, 2);

    players.forEach(player => {

        if (!finalists.includes(player)) {
            player.eliminated = true;
        }

    });

    finalists.forEach(player => {
        player.eliminated = false;
    });

    updateLeaderboard();

    clearAllTimers();

    const session = transitionSession;

    transitionOverlay.classList.remove("hidden");

    transitionLevel.textContent = t("level5");

    transitionTitle.textContent = t("winnerCup");

    transitionRules.textContent = t("level5Rules");

    transitionMessage.textContent =
        `${t("finalists")}: ${finalists[0].name} & ${finalists[1].name}`;

    let count = 5;

    countdownNumber.textContent = count;

    const interval = setInterval(() => {

        if (session !== transitionSession) {

            clearInterval(interval);

            return;
        }

        count--;

        countdownNumber.textContent = count;

        if (count <= 0) {

            clearInterval(interval);

            transitionOverlay.classList.add("hidden");

            createLevel5();
        }

    }, 1000);

    timers.push(interval);
}


function createLevel5() {

    currentLevel = 5;

    cards = [

        {
            value: 0,
            type: "empty",
            revealed: false,
            winnerCup: false
        },

        {
            value: 0,
            type: "empty",
            revealed: false,
            winnerCup: false
        },

        {
            value: 0,
            type: "cup",
            revealed: false,
            winnerCup: true
        }

    ];

    cards = shuffle(cards);

    selectedCards = 0;

    level5Selections = 0;

    /*
       Higher-score finalist gets first choice.
    */

    if (finalists[0].score >= finalists[1].score) {

        level5CurrentIndex = 0;

    }

    else {

        level5CurrentIndex = 1;

    }

    renderCards();

    updateLevelUI();

    updateLevel5Turn();

    updateGameMessage(t("chooseWinnerCup"));
}


function updateLevel5Turn() {

    const finalist = finalists[level5CurrentIndex];

    if (finalist) {
        currentTurn.textContent = finalist.name;
    }
}


function selectLevel5Card(index) {

    const card = cards[index];

    if (!card || card.revealed) {
        return;
    }

    const finalist = finalists[level5CurrentIndex];

    if (!finalist) {
        return;
    }

    card.revealed = true;

    selectedCards++;

    level5Selections++;

    renderCards();

    /*
       Winner Cup
    */

    if (card.winnerCup) {

        updateGameMessage(t("winnerCupFound"));

        finishGame(finalist);

        return;
    }

    /*
       Empty card.
    */

    updateGameMessage(
        `${finalist.name}: ${t("empty")}`
    );

    /*
       Sequence:
       1. Higher-score finalist
       2. Other finalist
       3. First finalist gets final card
    */

    if (level5Selections === 1) {

        level5CurrentIndex =
            level5CurrentIndex === 0 ? 1 : 0;

        const timer = setTimeout(() => {

            updateLevel5Turn();

            updateGameMessage(t("secondFinalistTurn"));

        }, 2000);

        timers.push(timer);

    }

    else if (level5Selections === 2) {

        /*
           First finalist gets the final card.
        */

        level5CurrentIndex =
            level5CurrentIndex === 0 ? 1 : 0;

        const timer = setTimeout(() => {

            updateLevel5Turn();

            updateGameMessage(t("finalChoice"));

        }, 2000);

        timers.push(timer);

    }

    else {

        /*
           This should only happen if something unusual occurs.
        */

        finishGame(finalist);
    }
}


/* =========================
   FINISH GAME
   ========================= */

function finishGame(winner) {

    clearAllTimers();

    gameStarted = false;

    transitionSession++;

    cardsGrid.querySelectorAll("button").forEach(button => {
        button.disabled = true;
    });

    players.forEach(player => {

        if (player === winner) {
            player.eliminated = false;
        }

    });

    updateLeaderboard();

    winnerName.textContent = winner.name;

    if (currentLevel === 5) {

        winnerScore.textContent =
            `${winner.score} ${t("points")}`;

    }

    else {

        winnerScore.textContent =
            `${winner.score} ${t("points")} • ${t("gameComplete")}`;

    }

    saveGameHistory(winner);

    winnerOverlay.classList.remove("hidden");

    document.body.classList.add("winner-open");
}


/* =========================
   HISTORY
   ========================= */

function saveGameHistory(winner) {

    if (historySaved) {
        return;
    }

    historySaved = true;

    const username = localStorage.getItem("currentUser");

    if (!username) {
        return;
    }

    const users = JSON.parse(
        localStorage.getItem("7yuqps") || "[]"
    );

    const userIndex = users.findIndex(
        user => user.username === username
    );

    if (userIndex === -1) {
        return;
    }

    if (!Array.isArray(users[userIndex].history)) {
        users[userIndex].history = [];
    }

    const historyRecord = {

        gameNumber: gameNumber,

        date: new Date().toLocaleString(),

        mode: `${players.length} Players`,

        levelReached: currentLevel,

        players: players.map(player => ({
            name: player.name,
            score: player.score,
            eliminated: player.eliminated,
            robot: player.robot,
            level5Place: player.level5Place
        })),

        diamondWinner: null,

        winner: winner.name

    };

    users[userIndex].history.push(historyRecord);

    localStorage.setItem(
        "7yuqps",
        JSON.stringify(users)
    );
}


function showHistory() {

    historyContent.innerHTML = "";

    const username = localStorage.getItem("currentUser");

    if (!username) {

        historyContent.innerHTML =
            `<p>${t("noHistory")}</p>`;

        historyModal.classList.remove("hidden");

        return;
    }

    const users = JSON.parse(
        localStorage.getItem("7yuqps") || "[]"
    );

    const user = users.find(
        item => item.username === username
    );

    const history =
        user && Array.isArray(user.history)
            ? user.history
            : [];

    if (!history.length) {

        historyContent.innerHTML =
            `<p>${t("noHistory")}</p>`;

        historyModal.classList.remove("hidden");

        return;
    }

    [...history]
        .reverse()
        .forEach(record => {

            const item = document.createElement("div");

            item.className = "history-item";

            const playersHTML =
                (record.players || [])
                    .map(player => {

                        return `
                            <div class="history-player">
                                ${escapeHTML(player.name)}
                                — ${player.score} ${t("points")}
                            </div>
                        `;

                    })
                    .join("");

            item.innerHTML = `
                <h3>Game ${record.gameNumber}</h3>

                <p>${record.date}</p>

                <p>${record.mode}</p>

                <p>
                    ${t("levelReached") || "Level"}:
                    ${record.levelReached}
                </p>

                <p>
                    🏆 ${escapeHTML(record.winner)}
                </p>

                <div class="history-players">
                    ${playersHTML}
                </div>
            `;

            historyContent.appendChild(item);
        });

    historyModal.classList.remove("hidden");
}


/* =========================
   CLEAR HISTORY
   ========================= */

clearHistoryBtn.addEventListener("click", function () {

    const username = localStorage.getItem("currentUser");

    if (!username) {
        return;
    }

    const users = JSON.parse(
        localStorage.getItem("7yuqps") || "[]"
    );

    const userIndex = users.findIndex(
        user => user.username === username
    );

    if (userIndex !== -1) {

        users[userIndex].history = [];

        localStorage.setItem(
            "7yuqps",
            JSON.stringify(users)
        );

    }

    showHistory();
});


/* =========================
   RULES
   ========================= */

function updateRulesContent() {

    const content = document.getElementById("rulesContent");

    if (!content) {
        return;
    }

    content.innerHTML = `

        <div class="rule-section">
            <h3>${t("rulesTitle1")}</h3>
            <p>${t("rulesText1")}</p>
        </div>

        <div class="rule-section">
            <h3>${t("rulesTitle2")}</h3>
            <p>${t("rulesText2")}</p>
        </div>

        <div class="rule-section">
            <h3>${t("rulesTitle3")}</h3>
            <p>${t("rulesText3")}</p>
        </div>

        <div class="rule-section">
            <h3>${t("rulesTitle4")}</h3>
            <p>${t("rulesText4")}</p>
        </div>

    `;
}


/* =========================
   NEW GAME
   ========================= */

function startFreshGame() {

    clearAllTimers();

    transitionSession++;

    winnerOverlay.classList.add("hidden");

    transitionOverlay.classList.add("hidden");

    rulesModal.classList.add("hidden");

    historyModal.classList.add("hidden");

    document.body.classList.remove("winner-open");

    gameStarted = true;

    historySaved = false;

    currentLevel = 1;

    currentPlayerIndex = 0;

    selectedCards = 0;

    finalists = [];

    level5CurrentIndex = 0;

    level5Selections = 0;

    gameStartTime = new Date();

    gameNumber = getNextGameNumber();

    players = players.map((player, index) => {

        return {
            name: player.name,
            score: 0,
            eliminated: false,
            robot: false,
            level5Place: null,
            registrationOrder: index
        };

    });

    showPage(gamePage);

    createLevel1();

    updateLeaderboard();

    updateTurnDisplay();

    updateGameMessage();
}


newGameBtn.addEventListener("click", function () {

    if (!players.length) {
        openSetup();
        return;
    }

    startFreshGame();
});


bottomNewGameBtn.addEventListener("click", function () {

    if (!players.length) {
        openSetup();
        return;
    }

    startFreshGame();
});


winnerNewGameBtn.addEventListener("click", function () {

    if (!players.length) {
        openSetup();
        return;
    }

    startFreshGame();
});


/* =========================
   EXIT → HOME
   ========================= */

function exitToHome() {

    clearAllTimers();

    transitionSession++;

    gameStarted = false;

    cards = [];

    selectedCards = 0;

    currentPlayerIndex = 0;

    finalists = [];

    level5CurrentIndex = 0;

    level5Selections = 0;

    winnerOverlay.classList.add("hidden");

    transitionOverlay.classList.add("hidden");

    rulesModal.classList.add("hidden");

    historyModal.classList.add("hidden");

    document.body.classList.remove("winner-open");

    showPage(homePage);
}


gameExitBtn.addEventListener("click", exitToHome);

bottomHomeBtn.addEventListener("click", exitToHome);

winnerHomeBtn.addEventListener("click", exitToHome);

setupBackBtn.addEventListener("click", function () {
    showPage(homePage);
});


/* =========================
   GAME 1 / GAME 2
   ========================= */

game1Btn.addEventListener("click", function () {
    openSetup();
});


game2Btn.addEventListener("click", function () {

    alert(t("arrivingMessage"));

});


/* =========================
   RULES MODAL
   ========================= */

function openRules() {

    updateRulesContent();

    rulesModal.classList.remove("hidden");
}


gameRulesBtn.addEventListener("click", openRules);

homeRulesBtn.addEventListener("click", openRules);


closeRulesBtn.addEventListener("click", function () {
    rulesModal.classList.add("hidden");
});


rulesModal.addEventListener("click", function (event) {

    if (event.target === rulesModal) {
        rulesModal.classList.add("hidden");
    }

});


/* =========================
   HISTORY MODAL
   ========================= */

historyBtn.addEventListener("click", showHistory);


closeHistoryBtn.addEventListener("click", function () {
    historyModal.classList.add("hidden");
});


historyModal.addEventListener("click", function (event) {

    if (event.target === historyModal) {
        historyModal.classList.add("hidden");
    }

});


/* =========================
   ESC KEY
   ========================= */

document.addEventListener("keydown", function (event) {

    if (event.key !== "Escape") {
        return;
    }

    rulesModal.classList.add("hidden");

    historyModal.classList.add("hidden");

});


/* =========================
   INITIALIZATION
   ========================= */

function initializeGame() {

    createPlayerInputs();

    applyLanguage();

    showPage(homePage);
}

initializeGame();