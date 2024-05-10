const h2=document.createElement('h2');
let playerOneScore =0;
let playerTwoScore=0;
let maxScore=0;
h2.textContent= playerOneScore+" to "+playerTwoScore;
const scores = document.querySelector('hr').insertAdjacentElement('afterend', h2)
const playerOneButton=document.querySelector('.one');
const playerTwoButton=document.querySelector('.two');
const resetButton=document.querySelector('.reset');
const highScore=document.querySelector('#number-dd')

function updateScore(){
    document.querySelector('h2').textContent=playerOneScore+ " to "+playerTwoScore;
}

function playerOneScored(){
    playerOneScore++;
    updateScore();
    checkWin();
}

function playerTwoScored(){
    playerTwoScore++;
    updateScore();
    checkWin();
}

function resetScored(){
    playerOneScore=0;
    playerTwoScore=0;
    highScore.value='';
    playerOneButton.disabled=true;
    playerTwoButton.disabled=true;
    const confettiElements=document.querySelectorAll('.confetti');
    confettiElements.forEach(confetti=>confetti.remove());
    updateScore();
}

playerOneButton.addEventListener('click', playerOneScored)
playerTwoButton.addEventListener('click', playerTwoScored)
resetButton.addEventListener('click', resetScored)

function checkWin(){
    if(playerOneScore===maxScore||playerTwoScore===maxScore){
        const winner = playerOneScore===maxScore?"Player one":"Player two";
        createConfetti();
        playerOneButton.disabled=true;
        playerTwoButton.disabled=true;
        alert(winner+" has won!");
}}

highScore.addEventListener('change', function(){
    maxScore=parseInt(highScore.value);
    if(!isNaN(maxScore)){
        playerOneButton.disabled=false;
        playerTwoButton.disabled=false;
        resetButton.disabled=false;
    }
    else{
        playerOneButton.disabled=true;
        playerTwoButton.disabled=true;
        resetButton.disabled=true;}
});

function createConfetti(){
    for(let i=1;i<=500;i++){
    const confetti=document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left=Math.random()*window.innerWidth+'px';
    confetti.style.animationDuration=Math.random()*3+2+'s';
    confetti.style.opacity=Math.random();
    document.body.appendChild(confetti);
    
}
}