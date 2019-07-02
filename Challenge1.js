/*
Chanllenge 1 :

If player Rolls two consicutive sixes  he will lose all his scores and it's next player turn.
*/
//var player1 =prompt('Welcome, Enter Name of Player 1');
//var player2 =prompt('Welcome, Enter Name of Player 2');
//document.getElementById('name-0').textContent = player1;
//document.getElementById('name-1').textContent = player2;
var activePlayer,roundScore,scores,gamePlaying=true,lastDice,winScore;
document.querySelector('.btn-set').addEventListener('click', function (){

winScore=document.getElementById('wScore').value;
});
init();
document.querySelector('.btn-roll').addEventListener('click', function (){
    if(gamePlaying){
    var dice = Math.floor(Math.random() * 6) +1 ;   
    var diceDom= document.querySelector('.dice');
    diceDom.src = 'dice-'+dice +'.png';
    document.querySelector('.dice').style.display= 'block';
        if(lastDice===6 && dice===6){
            //next player
            scores[activePlayer]=0;
            document.querySelector('#score-'+ activePlayer).textContent =scores[activePlayer];
            nextPlayer();
        }
    if(dice !== 1){
        //Add RoundScore
        roundScore+=dice;
        document.getElementById('current-'+ activePlayer).textContent =roundScore;
    }
    else{
        //Change Player
        nextPlayer();
    }
        lastDice=dice;
    }

});
    document.querySelector('.btn-hold').addEventListener('click',function (){
    scores[activePlayer] +=roundScore;
    
    if(gamePlaying){
    document.querySelector('#score-'+ activePlayer).textContent =scores[activePlayer];
        //check player scores 100
        if(scores[activePlayer] >= winScore){
            document.getElementById('name-'+activePlayer).textContent='Winner!'; 
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer +'-panel').classList.remove('active');
            document.querySelector('.btn-hold').classList.remove();
            gamePlaying = false;
        }
        else{
             nextPlayer();
        }
        }
        
       
})


function nextPlayer(){
    activePlayer === 0 ? activePlayer =1 : activePlayer=0;
        roundScore =0;
        document.querySelector('.dice').style.display= 'none';
        document.getElementById('current-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
       document.querySelector('.player-0-panel').classList.toggle('active');
       document.querySelector('.player-1-panel').classList.toggle('active');
}
document.querySelector('.btn-new').addEventListener('click',init);
function init() {
    activePlayer=0;
roundScore=0;
scores=[0,0];
document.querySelector('#current-0').textContent = '0';
document.querySelector('#score-0').textContent = '0';
document.querySelector('#current-1').textContent = '0';
document.querySelector('#score-1').textContent = '0';
document.querySelector('.dice').style.display= 'none';
document.getElementById('name-0').textContent = 'player1';
document.getElementById('name-1').textContent = 'player2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
    gamePlaying = true;

}