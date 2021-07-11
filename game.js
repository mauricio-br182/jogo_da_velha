let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0
let gameOver = false
let players = ['x', 'o']
let index_1 = 0
let index_2 = 0

let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function handleMove(position) {

    if (gameOver) {
        return
    }

    if (board[position] == '') {
        board[position] = players[playerTime]

        gameOver = isWin();

        if (!gameOver) {

            playerTime = (playerTime == 0) ? 1 : 0

        }
    }
    return gameOver
}

function isWin() {


    for (let i = 0; i < winStates.length; i++) {

        seq = winStates[i]
        pos1 = seq[0]
        pos2 = seq[1]
        pos3 = seq[2]

        if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != '') {
            setTimeout(() => {

                if (playerTime == 1) {

                    index_1 = index_1 + 1
                    alert('gameover player atacante (x) win')
                    
                }
                if (playerTime == 0) {

                    index_2 = index_2 + 1
                    alert('gameover player atacante (o) win')
                }

            }, 1);

            return true
        }

    }

}

//restart button

function update() {
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0
    gameOver = false
}
