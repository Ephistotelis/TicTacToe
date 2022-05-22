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

function setMove(row, column) {
    gamefield[row][column] = currentPlayer;
    checkWinner();
}

function checkWinner() {
    if (gamefield[0][0] == gamefield[0][1] && gamefield[0][1] == gamefield[0][2] && gamefield[0][2] == gamefield[0][0]) {
        let winner = gamefield[0][0]
        alert(winner);
        // winScreen();
        return
    }
    if (gamefield[1][0] == gamefield[1][1] && gamefield[1][1] == gamefield[1][2] && gamefield[1][2] == gamefield[1][0]) {
        let winner = gamefield[1][0]
        alert(winner);
        // winScreen();
        return
    }
    if (gamefield[2][0] == gamefield[2][1] && gamefield[2][1] == gamefield[2][2] && gamefield[2][2] == gamefield[2][0]) {
        let winner = gamefield[2][0]
        alert(winner);
        // winScreen();
        return
    }
    if (gamefield[0][0] == gamefield[1][0] && gamefield[1][0] == gamefield[2][0] && gamefield[2][0] == gamefield[0][0]) {
        let winner = gamefield[0][0]
        alert(winner);
        // winScreen();
        return
    }
    if (gamefield[0][1] == gamefield[1][1] && gamefield[1][1] == gamefield[2][1] && gamefield[2][1] == gamefield[0][1]) {
        let winner = gamefield[0][1]
        alert(winner);
        // winScreen();
        return
    }
    if (gamefield[0][2] == gamefield[1][2] && gamefield[1][2] == gamefield[2][2] && gamefield[2][2] == gamefield[0][2]) {
        let winner = gamefield[0][2]
        alert(winner);
        // winScreen();
        return
    }
    if (gamefield[0][0] == gamefield[1][1] && gamefield[1][1] == gamefield[2][2] && gamefield[2][2] == gamefield[0][0]) {
        let winner = gamefield[0][0]
        alert(winner);
        // winScreen();
        return
    }
    if (gamefield[2][0] == gamefield[1][1] && gamefield[1][1] == gamefield[0][2] && gamefield[0][2] == gamefield[2][0]) {
        let winner = gamefield[2][0]
        alert(winner);
        // winScreen();
        return
    }
    return
}

function playerMove(field) {
    let selectedField = document.getElementById(`field${field}`);

    if (selectedField.innerHTML) {
        alert("Das Feld ist bereits ausgefüllt, wähle ein Anderes!");
        return
    }
    selectedField.innerHTML = `<img src="${playerLogo[currentPlayer-1]}" alt="">`
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