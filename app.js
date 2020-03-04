/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
//var player1 =prompt('Welcome, Enter Name of Player 1');
//var player2 =prompt('Welcome, Enter Name of Player 2');
//document.getElementById('name-0').textContent = player1;
//document.getElementById('name-1').textContent = player2;
var activePlayer,roundScore,scores,gamePlaying=true;
init();
document.querySelector('.btn-roll').addEventListener('click', function (){
    if(gamePlaying){
    var dice1 = Math.floor(Math.random() * 6) +1 ;
    var dice2 = Math.floor(Math.random() * 6) +1 ;
    var diceDom1= document.getElementById('dice-1');
    var diceDom2= document.getElementById('dice-2');
    diceDom1.src = 'dice-'+dice1 +'.png';
    diceDom2.src = 'dice-'+dice2 +'.png';
    document.getElementById('dice-1').style.display= 'block';
    document.getElementById('dice-2').style.display= 'block';
    if(dice1 !== 1 && dice2 !== 1) {
        //Add RoundScore
        var dice=dice1+dice2;
        roundScore+=dice;
        document.getElementById('current-'+ activePlayer).textContent =roundScore;
    }
    else{
        //Change Player
        nextPlayer();
    }
    }

});
    document.querySelector('.btn-hold').addEventListener('click',function (){
    scores[activePlayer] +=roundScore;
    
    if(gamePlaying){
    document.querySelector('#score-'+ activePlayer).textContent =scores[activePlayer];
        //check player scores 100
        if(scores[activePlayer] >=100){
            document.getElementById('name-'+activePlayer).textContent='Winner!'; 
            document.getElementById('dice-1').style.display= 'none';
            document.getElementById('dice-2').style.display= 'none';
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
        document.getElementById('dice-1').style.display= 'none';
        document.getElementById('dice-2').style.display= 'none';
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
document.getElementById('dice-1').style.display= 'none';
document.getElementById('dice-2').style.display= 'none';
document.getElementById('name-0').textContent = 'player1';
document.getElementById('name-1').textContent = 'player2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
    gamePlaying = true;

}
document.querySelector('.btn-rule').addEventListener('click',function() {
    document.querySelector('.rules').classList.remove('hide');
});
document.querySelector('.btn-close').addEventListener('click',function() {
    document.querySelector('.rules').classList.add('hide');
});
