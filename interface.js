document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('click', handleClick)
    });
})

function handleClick(event) {

    let square = event.target
    let position = square.id

    handleMove(position);
    updateSquare(position);
    

}

function updateSquare(position) {

    let square = document.getElementById(position.toString());
    let players = board[position];
    square.innerHTML = `<div class='${players}'> </div>`;
}

// restart button

let restartButton = document.querySelector('.restart')
let contador = 1

restartButton.addEventListener('click', restart)

function restart(){
    update()
    scoreUpdate()

    let squares = document.querySelectorAll('.square')
    
    squares.forEach(square => {
        
        let position = square.id;
        let players = board[position]
        
        square.innerHTML = `<div class='${players}'></div>`
       
    });
    
    
}

function scoreUpdate() {
   
    let score_p1 = document.querySelector('.p1')
    
    score_p1.innerHTML = `<span> ${index_1} </span>`

    let score_p2 = document.querySelector('.p2')
    
    score_p2.innerHTML = `<span> ${index_2} </span>`

    
    
}

