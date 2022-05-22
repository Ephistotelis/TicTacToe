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
    selectplayer.innerHTML = `<button onclick="startGame(1)">Player 1</button>
    <button onclick="startGame(2)">Player 2</button>`
    let gamefieldcontent = document.getElementById('gamefield');
    gamefieldcontent.innerHTML = ''
    gamefieldcontent.innerHTML = templateGame();
}

function startGame(player) {
    currentPlayer = player;
    toggleContent();
    showCurrentPlayer();
}

function toggleContent() {
    let table = document.getElementById('table');
    let showplayer = document.getElementById('showCurPlayer');
    let selectPlayer = document.getElementById('selectPlayer');
    showplayer.classList.remove("d-none")
    table.classList.remove("d-none")
    selectPlayer.classList.add("d-none")
}

function setMove(row, column) {
    gamefield[row][column] = currentPlayer;
    checkWinner();
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

function setCurrentPlayer() {
    if (currentPlayer == 1) {
        currentPlayer++
    } else {
        currentPlayer--
    }
}

function showCurrentPlayer() {
    let showPlayer = document.getElementById('showPlayer')
    showPlayer.innerHTML = currentPlayer;
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
    showplayer.classList.add("d-none")
    showplayer.innerHTML = `<h1>Player <b id="showPlayer"></b></h1>`;
    selectPlayer.classList.remove("d-none")
}

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

function gameEnded(winner) {
    if (winner == 1) {
        let winnertext = document.getElementById('showCurPlayer');
        winnertext.innerHTML = `<h1>Player <b class="player1Text">${winner}</b> hat gewonnen!</h1>`;
    } else {
        let winnertext = document.getElementById('showCurPlayer');
        winnertext.innerHTML = `<h1>Player <b class="player2Text">${winner}</b> hat gewonnen!</h1>`;
    }
    for (let i = 1; i < 10; i++) {
        let field = document.getElementById(`field${i}`);
        field.classList.add("pe-none")
    }
}

function checkWinner() {
    if (gamefield[0][0] == gamefield[0][1] && gamefield[0][1] == gamefield[0][2] && gamefield[0][2] == gamefield[0][0]) {
        let winner = gamefield[0][0]
        document.getElementById('field1').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field2').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field3').classList.add(`playerwin${currentPlayer}`)
        gameEnded(winner);
        return
    }
    if (gamefield[1][0] == gamefield[1][1] && gamefield[1][1] == gamefield[1][2] && gamefield[1][2] == gamefield[1][0]) {
        let winner = gamefield[1][0]
        document.getElementById('field4').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field5').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field6').classList.add(`playerwin${currentPlayer}`)
        gameEnded(winner);
        return
    }
    if (gamefield[2][0] == gamefield[2][1] && gamefield[2][1] == gamefield[2][2] && gamefield[2][2] == gamefield[2][0]) {
        let winner = gamefield[2][0]
        document.getElementById('field7').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field8').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field9').classList.add(`playerwin${currentPlayer}`)
        gameEnded(winner);
        return
    }
    if (gamefield[0][0] == gamefield[1][0] && gamefield[1][0] == gamefield[2][0] && gamefield[2][0] == gamefield[0][0]) {
        let winner = gamefield[0][0]
        document.getElementById('field1').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field4').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field7').classList.add(`playerwin${currentPlayer}`)
        gameEnded(winner);
        return
    }
    if (gamefield[0][1] == gamefield[1][1] && gamefield[1][1] == gamefield[2][1] && gamefield[2][1] == gamefield[0][1]) {
        let winner = gamefield[0][1]
        document.getElementById('field2').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field5').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field8').classList.add(`playerwin${currentPlayer}`)
        gameEnded(winner);
        return
    }
    if (gamefield[0][2] == gamefield[1][2] && gamefield[1][2] == gamefield[2][2] && gamefield[2][2] == gamefield[0][2]) {
        let winner = gamefield[0][2]
        document.getElementById('field3').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field6').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field9').classList.add(`playerwin${currentPlayer}`)
        gameEnded(winner);
        return
    }
    if (gamefield[0][0] == gamefield[1][1] && gamefield[1][1] == gamefield[2][2] && gamefield[2][2] == gamefield[0][0]) {
        let winner = gamefield[0][0]
        document.getElementById('field1').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field5').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field9').classList.add(`playerwin${currentPlayer}`)
        gameEnded(winner);
        return
    }
    if (gamefield[2][0] == gamefield[1][1] && gamefield[1][1] == gamefield[0][2] && gamefield[0][2] == gamefield[2][0]) {
        let winner = gamefield[2][0]
        document.getElementById('field7').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field5').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field3').classList.add(`playerwin${currentPlayer}`)
        gameEnded(winner);
        return
    }
    checkDraw();
    if (gamedraw == 45) {
        gamedrawEnded();
    }
    return
}

function gamedrawEnded() {
    let winnertext = document.getElementById('showCurPlayer');
    winnertext.innerHTML = `<h1>Unentschieden! Keiner hat gewonnen!</h1>`;
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