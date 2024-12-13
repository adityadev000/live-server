const gameInfo = document.querySelector('.game-info');
const newGame = document.querySelector('.btn') ; 
const boxArr = document.querySelectorAll('.box') ; 

let turn  ; 

let click = [1,1,1,1,1,1,1,1,1] ; 



initGame() ;

function initGame(){

    turn = 'X' ; 
    //game info me data fill kro.
    gameInfo.innerText = `Current player - ${turn}` ;


    for(let i =0 ;i < 9 ; i++ ){
        click[i] = 1 ; 

        boxArr[i].innerText = '' ;  

        boxArr[i].classList.remove('win') ; 

        boxArr[i].style.pointerEvents = "all" ; 
    }
    
    newGame.classList.remove('active') ;
}


newGame.addEventListener("click" , initGame) ; 

// win logic 
function gameWin(){

    if(boxArr[0].innerText ===   boxArr[1].innerText && boxArr[1].innerText  ===  boxArr[2].innerText && boxArr[0].innerText!= ''){
        boxArr[0].classList.add('win');
        boxArr[1].classList.add('win');
        boxArr[2].classList.add('win');
        if(turn == 'O')
            gameInfo.innerText = "player X win " ;
        else
            gameInfo.innerText = "player O win " ;

        newGame.classList.add("active") ;

        for(let i = 0 ; i < 9 ;i ++ ) {
            click[i] = 0 ; 
        }
    }
    
    else if(boxArr[3].innerText ===   boxArr[4].innerText && boxArr[4].innerText  ===  boxArr[5].innerText && boxArr[3].innerText!= ''){
        boxArr[3].classList.add('win');
        boxArr[4].classList.add('win');
        boxArr[5].classList.add('win');
        if(turn == 'O')
            gameInfo.innerText = "player X win " ;
        else
            gameInfo.innerText = "player O win " ;

        newGame.classList.add("active") ;

        for(let i = 0 ; i < 9 ;i ++ ) {
            click[i] = 0 ; 
        }
    }

    else if(boxArr[6].innerText ===   boxArr[7].innerText && boxArr[7].innerText  ===  boxArr[8].innerText && boxArr[6].innerText!= ''){
        boxArr[6].classList.add('win');
        boxArr[7].classList.add('win');
        boxArr[8].classList.add('win');
        if(turn == 'O')
            gameInfo.innerText = "player X win " ;
        else
            gameInfo.innerText = "player O win " ;

        newGame.classList.add("active") ;
        for(let i = 0 ; i < 9 ;i ++ ) {
            click[i] = 0 ; 
        }
    }

    else if(boxArr[0].innerText ===   boxArr[3].innerText && boxArr[3].innerText  ===  boxArr[6].innerText && boxArr[0].innerText!= ''){
        boxArr[0].classList.add('win');
        boxArr[3].classList.add('win');
        boxArr[6].classList.add('win');
        if(turn == 'O')
            gameInfo.innerText = "player X win " ;
        else
            gameInfo.innerText = "player O win " ;

        newGame.classList.add("active") ;
        for(let i = 0 ; i < 9 ;i ++ ) {
            click[i] = 0 ; 
        }
    }

    else if(boxArr[1].innerText ===   boxArr[4].innerText && boxArr[4].innerText  ===  boxArr[7].innerText && boxArr[1].innerText!= ''){
        boxArr[1].classList.add('win');
        boxArr[4].classList.add('win');
        boxArr[7].classList.add('win');
        if(turn == 'O')
            gameInfo.innerText = "player X win " ;
        else
            gameInfo.innerText = "player O win " ;

        newGame.classList.add("active") ;
        for(let i = 0 ; i < 9 ;i ++ ) {
            click[i] = 0 ; 
        }
    }

    else if(boxArr[2].innerText ===   boxArr[5].innerText && boxArr[5].innerText  ===  boxArr[8].innerText && boxArr[2].innerText!= ''){
        boxArr[2].classList.add('win');
        boxArr[5].classList.add('win');
        boxArr[8].classList.add('win');
        if(turn == 'O')
            gameInfo.innerText = "player X win " ;
        else
            gameInfo.innerText = "player O win " ;

        newGame.classList.add("active") ;
        for(let i = 0 ; i < 9 ;i ++ ) {
            click[i] = 0 ; 
        }
    }

    else if(boxArr[0].innerText ===   boxArr[4].innerText && boxArr[4].innerText  ===  boxArr[8].innerText && boxArr[0].innerText!= ''){
        boxArr[0].classList.add('win');
        boxArr[4].classList.add('win');
        boxArr[8].classList.add('win');
        if(turn == 'O')
            gameInfo.innerText = "player X win " ;
        else
            gameInfo.innerText = "player O win " ;

        newGame.classList.add("active") ;
        for(let i = 0 ; i < 9 ;i ++ ) {
            click[i] = 0 ; 
        }
    }

    else if(boxArr[2].innerText ===   boxArr[4].innerText && boxArr[4].innerText  ===  boxArr[6].innerText && boxArr[2].innerText!= ''){
        boxArr[2].classList.add('win');
        boxArr[4].classList.add('win');
        boxArr[6].classList.add('win');
        if(turn == 'O')
            gameInfo.innerText = "player X win " ;
        else
            gameInfo.innerText = "player O win " ;

        newGame.classList.add("active") ;
        for(let i = 0 ; i < 9 ;i ++ ) {
            click[i] = 0 ; 
        }
    }
    
    if(boxArr[0].innerText != '' && boxArr[1].innerText != '' && boxArr[2].innerText != '' && boxArr[3].innerText != ''&& boxArr[4].innerText != ''&& boxArr[5].innerText != ''&& boxArr[6].innerText != ''&& boxArr[7].innerText != ''&& boxArr[8].innerText != ''){
        
        gameInfo.innerText = "Game Tied!" ;
    
        newGame.classList.add("active") ;
        for(let i = 0 ; i < 9 ;i ++ ) {
            click[i] = 0 ; 
        }
    }

    
}


// click to add O or X
for(let i =0; i < 9 ;i ++ ){ 

    boxArr[i].addEventListener("click" , () => {
        if(click[i] == 0 ){
            return  ;
        }

        if(turn === 'X' ){

            boxArr[i].innerText = "X";
            turn = 'O' ; 
            gameInfo.innerText = `Current player - ${turn}`;
            
        }
        else{
            boxArr[i].innerText = "O" ;
            turn = 'X' ;
            gameInfo.innerText = `Current player - ${turn}`;
        }
        boxArr[i].style.pointerEvents = "none" ; 
        click[i] = 0 ; 
        gameWin();
    })
}


