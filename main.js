let currentPlayer = 1; // 1 und 2
let playerLogo = ["img/circle.png", "img/cross.png"] // dafür -1
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

function playerMove(field) {
    let selectedField = document.getElementById(`field${field}`);

    if (selectedField.innerHTML) {
        alert("Das Feld ist bereits ausgefüllt, wähle ein Anderes!");
        return
    }
    selectedField.innerHTML = `<img src="${playerLogo[currentPlayer-1]}" alt="">`
    selectedField.classList.add(`playerColor${currentPlayer}`)
    if (currentPlayer == 1) {
        currentPlayer++
    } else {
        currentPlayer--
    }
    showCurrentPlayer();
}

function showCurrentPlayer() {
    let showPlayer = document.getElementById('showPlayer')
    showPlayer.innerHTML = currentPlayer;
}

function resetGame() {

    let showplayer = document.getElementById('showCurPlayer');
    let selectPlayer = document.getElementById('selectPlayer');
    showplayer.classList.add("d-none")
    selectPlayer.classList.remove("d-none")
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

function templateGame() {
    return `
    <table id="table" class="d-none">
    <tr>
        <td id="field1" onclick="setMove(0, 0), playerMove(1)"></td>
        <td id="field2" onclick="setMove(0, 1), playerMove(2)"></td>
        <td id="field3" onclick="setMove(0, 2), playerMove(3)"></td>
    </tr>
    <tr>
        <td id="field4" onclick="setMove(1, 0), playerMove(4)"></td>
        <td id="field5" onclick="setMove(1, 1), playerMove(5)"></td>
        <td id="field6" onclick="setMove(1, 2), playerMove(6)"></td>
    </tr>
    <tr>
        <td id="field7" onclick="setMove(2, 0), playerMove(7)"></td>
        <td id="field8" onclick="setMove(2, 1), playerMove(8)"></td>
        <td id="field9" onclick="setMove(2, 2), playerMove(9)"></td>
    </tr>
</table>
    `
}

function checkWinner() {
    if (gamefield[0][0] == gamefield[0][1] && gamefield[0][1] == gamefield[0][2] && gamefield[0][2] == gamefield[0][0]) {
        let winner = gamefield[0][0]
        document.getElementById('field1').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field2').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field3').classList.add(`playerwin${currentPlayer}`)

        // winScreen();
        return
    }
    if (gamefield[1][0] == gamefield[1][1] && gamefield[1][1] == gamefield[1][2] && gamefield[1][2] == gamefield[1][0]) {
        let winner = gamefield[1][0]
        document.getElementById('field4').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field5').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field6').classList.add(`playerwin${currentPlayer}`)
            // winScreen();
        return
    }
    if (gamefield[2][0] == gamefield[2][1] && gamefield[2][1] == gamefield[2][2] && gamefield[2][2] == gamefield[2][0]) {
        let winner = gamefield[2][0]
        document.getElementById('field7').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field8').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field9').classList.add(`playerwin${currentPlayer}`)
            // winScreen();
        return
    }
    if (gamefield[0][0] == gamefield[1][0] && gamefield[1][0] == gamefield[2][0] && gamefield[2][0] == gamefield[0][0]) {
        let winner = gamefield[0][0]
        document.getElementById('field1').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field4').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field7').classList.add(`playerwin${currentPlayer}`)
            // winScreen();
        return
    }
    if (gamefield[0][1] == gamefield[1][1] && gamefield[1][1] == gamefield[2][1] && gamefield[2][1] == gamefield[0][1]) {
        let winner = gamefield[0][1]
        document.getElementById('field2').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field5').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field8').classList.add(`playerwin${currentPlayer}`)
            // winScreen();
        return
    }
    if (gamefield[0][2] == gamefield[1][2] && gamefield[1][2] == gamefield[2][2] && gamefield[2][2] == gamefield[0][2]) {
        let winner = gamefield[0][2]
        document.getElementById('field3').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field6').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field9').classList.add(`playerwin${currentPlayer}`)
            // winScreen();
        return
    }
    if (gamefield[0][0] == gamefield[1][1] && gamefield[1][1] == gamefield[2][2] && gamefield[2][2] == gamefield[0][0]) {
        let winner = gamefield[0][0]
        document.getElementById('field1').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field5').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field9').classList.add(`playerwin${currentPlayer}`)
            // winScreen();
        return
    }
    if (gamefield[2][0] == gamefield[1][1] && gamefield[1][1] == gamefield[0][2] && gamefield[0][2] == gamefield[2][0]) {
        let winner = gamefield[2][0]
        document.getElementById('field7').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field5').classList.add(`playerwin${currentPlayer}`)
        document.getElementById('field3').classList.add(`playerwin${currentPlayer}`)
            // winScreen();
        return
    }
    return
}