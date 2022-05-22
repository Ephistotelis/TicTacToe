let currentPlayer = 1; // 1 und 2
let playerLogo = ["img/circle.png", "img/cross.png"] // dafür -1
let gamedraw = 0; // for draw option if gamedraw == 45 and no other if´s before trigger, its draw
let gamefield = [
    [
        [],
        [],
        []
    ],
    [
        [],
        [],
        []
    ],
    [
        [],
        [],
        []
    ]
]

function loadGame() {
    let selectplayer = document.getElementById('selectPlayer');
    selectplayer.innerHTML = ``;
    selectplayer.innerHTML = `<h2>Welcher Spieler soll anfangen?</h2>
    <div class="chooseplayer">
    <button onclick="startGame(1)">Player 1</button>
        <button onclick="startGame(2)">Player 2</button>
    </div>`
    let gamefieldcontent = document.getElementById('gamefield');
    gamefieldcontent.innerHTML = ''
    gamefieldcontent.innerHTML = templateGame();
}

function startGame(player) {
    currentPlayer = player;
    toggleContent();
    showCurrentPlayer();
}

function resetGame() {
    resetGameClasslist();
    gamedraw = 0;
    gamefield = [
        [
            [],
            [],
            []
        ],
        [
            [],
            [],
            []
        ],
        [
            [],
            [],
            []
        ]
    ];
    loadGame();
}

function resetGameClasslist() {
    let showplayer = document.getElementById('showCurPlayer');
    let selectPlayer = document.getElementById('selectPlayer');
    let reset = document.getElementById('resetGameButton');
    reset.innerHTML = '';
    showplayer.classList.add("d-none")
    showplayer.innerHTML = `<h1>Player <b id="showPlayer"></b></h1>`;
    selectPlayer.classList.remove("d-none")
}

function playerMove(field, row, column) {
    let selectedField = document.getElementById(`field${field}`);
    if (selectedField.innerHTML) {
        alert("Das Feld ist bereits ausgefüllt, wähle ein Anderes!");
        return
    }
    selectedField.innerHTML = `<img src="${playerLogo[currentPlayer-1]}" alt="">`
    selectedField.classList.add(`playerColor${currentPlayer}`)
    setMove(row, column)
    setCurrentPlayer();
    showCurrentPlayer();
}

function setMove(row, column) {
    gamefield[row][column] = currentPlayer;
    checkWinner();
}

function setCurrentPlayer() {
    if (currentPlayer == 1) {
        currentPlayer++
    } else {
        currentPlayer--
    }
}

function toggleContent() {
    let table = document.getElementById('table');
    let showplayer = document.getElementById('showCurPlayer');
    let selectPlayer = document.getElementById('selectPlayer');
    showplayer.classList.remove("d-none")
    table.classList.remove("d-none")
    selectPlayer.classList.add("d-none")
}


function showCurrentPlayer() {
    let showPlayer = document.getElementById('showPlayer')
    showPlayer.innerHTML = currentPlayer;
}

function gameEnded(winner) {
    if (winner == 1) {
        let winnertext = document.getElementById('showCurPlayer');
        let reset = document.getElementById('resetGameButton');
        winnertext.innerHTML = `<h1>Player <b class="player1Text">${winner}</b> hat gewonnen!</h1>`;
        reset.innerHTML = `<button onclick="resetGame()">Reset Game</button>`
    } else {
        let winnertext = document.getElementById('showCurPlayer');
        let reset = document.getElementById('resetGameButton');
        winnertext.innerHTML = `<h1>Player <b class="player2Text">${winner}</b> hat gewonnen!</h1>`;
        reset.innerHTML = `<button onclick="resetGame()">Reset Game</button>`
    }
    for (let i = 1; i < 10; i++) {
        let field = document.getElementById(`field${i}`);
        field.classList.add("pe-none")
    }
}

function gamedrawEnded() {
    let winnertext = document.getElementById('showCurPlayer');
    let reset = document.getElementById('resetGameButton');
    winnertext.innerHTML = `<h1>Unentschieden! Keiner hat gewonnen!</h1>`;
    reset.innerHTML = `<button onclick="resetGame()">Reset Game</button>`
    for (let i = 1; i < 10; i++) {
        let field = document.getElementById(`field${i}`);
        field.classList.add("pe-none")
    }
}

function checkDraw() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (gamefield[i][j].length !== 0) {
                console.log("draw") //just to test the function, deleted soon
                gamedraw += 1;
            } else {
                console.log("weiter") //just to test the function, deleted soon
            }
        }

    }
    console.log(gamedraw) //just to test the function, deleted soon
}
// Templates



function templateGame() {
    return `
    <table id="table" class="d-none">
    <tr>
        <td id="field1" onclick="playerMove(1,0,0)"></td>
        <td id="field2" onclick="playerMove(2,0,1)"></td>
        <td id="field3" onclick="playerMove(3,0,2)"></td>
    </tr>
    <tr>
        <td id="field4" onclick="playerMove(4,1,0)"></td>
        <td id="field5" onclick="playerMove(5,1,1)"></td>
        <td id="field6" onclick="playerMove(6,1,2)"></td>
    </tr>
    <tr>
        <td id="field7" onclick="playerMove(7,2,0)"></td>
        <td id="field8" onclick="playerMove(8,2,1)"></td>
        <td id="field9" onclick="playerMove(9,2,2)"></td>
    </tr>
</table>
    `
}