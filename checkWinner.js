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