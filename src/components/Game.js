
import Board from "./Board";
import '../styles/game.css'
import React, { useState , createContext, useEffect, useRef } from 'react';

import Button from 'react-bootstrap/Button';

let x = Math.floor(Math.random() * 3);
let y = Math.floor(Math.random() * 3);

var mergedDown=false;
var mergedUp=false;
var mergedLeft=false;
var mergedRight=false;
var generateNewTile = false;
var score = 0;
var dir="";
var mergedBoard = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
var game = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]] // empty board
game[x][y]=2

function Game() {

let [tiles, setTiles] = useState(game)
let [merged, setMerged] = useState(mergedBoard)
useEffect(() => {
    // subscribe event
    document.addEventListener("keydown", onKeyPressed);
    return () => {
      // unsubscribe event
      document.removeEventListener("keydown", onKeyPressed);
    };
  }, []);

const moveDown = () => {
    mergedDown=false;
    do{
    for(let x=game.length-1; x>0;x--){ //from bottom to top
        for(let y=game[x].length-1; y>=0;y--){ //from right to left
            if(game[x][y]==0){ //if the current tile is 0
                for(let x2=x-1; x2>=0;x2--){ //for the current x go upwards
                    if(game[x2][y]!=0){ //if the tile above the current x has a value
                        game[x][y]=game[x2][y] //move the tile down
                        game[x2][y]=0;
                        setTiles([...game]);
                        mergedBoard[x][y]=mergedBoard[x2][y] //move the tile down
                        mergedBoard[x2][y]=4;
                        setMerged([...mergedBoard]);
                        generateNewTile=true;
                        break;
                    }
                }
            }
            
        }
    }
    if(mergedDown==true){
        break;
    }
        for(let x=game.length-1; x>0;x--){ //from bottom to top
        for(let y=game[x].length-1; y>=0;y--){ //from right to left
        if (game[x][y]==game[x-1][y] && game[x][y]!=0){ //if the current tile has the same value as the tile above
            game[x][y]*=2; //merge them
            game[x-1][y]=0;
            setTiles([...game]);
            mergedDown = true;
            mergedBoard[x][y] = 1;
            setMerged([...mergedBoard]);
            score = score + game[x][y];
            generateNewTile=true;
        }
    }
    }
    } while (mergedDown=true)

    if(generateNewTile==true){
        newTile();
        generateNewTile=false;
    }
}

const moveUp = () => {
    mergedUp=false;
    do{
        for(let x=0; x<game.length-1;x++){
            for(let y=0; y<game[x].length;y++){
            if(game[x][y]==0){
                for(let x2=x+1; x2<game[x].length;x2++){
                    if(game[x2][y]!=0){
                        game[x][y]=game[x2][y]
                        game[x2][y]=0;
                        setTiles([...game]);
                        mergedBoard[x][y]=mergedBoard[x2][y] //move the tile down
                        mergedBoard[x2][y]=0;
                        setMerged([...mergedBoard]);
                        generateNewTile=true;
                        break;
                    }
                }
            }
            
        }
    }
    if(mergedUp==true){
        break;
    }
        for(let x=game.length-1; x>0;x--){
        for(let y=game[x].length-1; y>=0;y--){
        if (game[x][y]==game[x-1][y] && game[x][y]!=0){
            game[x][y]*=2;
            game[x-1][y]=0;
            setTiles([...game]);
            generateNewTile=true;
            mergedUp = true;
            mergedBoard[x][y] = 1;
            setMerged([...mergedBoard]);
            score = score + game[x][y];
        }
    }
    }
    } while (mergedUp=true)

    if(generateNewTile==true){
        newTile()
        generateNewTile=false;
    }
}

const moveRight = () => {
    mergedRight=false;
    do{
        for(let y=game.length-1; y>0;y--){
        for(let x=game.length-1; x>=0;x--){
            if(game[x][y]==0){
                for(let y2=y-1; y2>=0;y2--){
                    if(game[x][y2]!=0){
                        game[x][y]=game[x][y2]
                        game[x][y2]=0;
                        setTiles([...game]);
                        generateNewTile=true;
                        mergedBoard[x][y]=mergedBoard[x][y2] //move the tile down
                        mergedBoard[x][y2]=0;
                        setMerged([...mergedBoard]);
                        break;
                    }
                }
            }
        }
    }
    if(mergedRight==true){
        break;
    }
    for(let y=game.length-1; y>0;y--){
        for(let x=game.length-1; x>=0;x--){
            if (game[x][y]==game[x][y-1] && game[x][y]!=0){
                game[x][y]*=2;
                game[x][y-1]=0;
                setTiles([...game]);
                generateNewTile=true;
                mergedRight=true;
                mergedBoard[x][y] = 1;
                setMerged([...mergedBoard]);
                score = score + game[x][y];
            }
        }
    } 
    } while (mergedRight==true);
    if(generateNewTile==true){
        newTile()
        generateNewTile=false;
    }
}


const moveLeft = () => {
    mergedLeft=false;
    do{
        for(let y=0; y<game.length-1;y++){
        for(let x=0; x<game.length;x++){
            if(game[x][y]==0){
                for(let y2=y+1; y2<game[y].length;y2++){
                    if(game[x][y2]!=0){
                        game[x][y]=game[x][y2]
                        game[x][y2]=0;
                        setTiles([...game]);
                        generateNewTile=true;
                        mergedBoard[x][y]=mergedBoard[x][y2] //move the tile down
                        mergedBoard[x][y2]=0;
                        setMerged([...mergedBoard]);
                        break;
                    }
                }
            }
        }
    }
    if(mergedLeft==true){
        break;
    }
    for(let y=0; y<game.length-1;y++){
        for(let x=0; x<game.length;x++){
            if (game[x][y]==game[x][y+1] && game[x][y]!=0){
                game[x][y]*=2;
                game[x][y+1]=0;
                setTiles([...game]);
                mergedLeft=true;
                generateNewTile=true;
                mergedBoard[x][y] = 1;
                setMerged([...mergedBoard]);
                score = score + game[x][y];
            }
        }
    }
} while (mergedLeft==true)
    if(generateNewTile==true){
        newTile()
        generateNewTile=false;

    }
}

const newTile = () => {
    do{
        
    x = Math.floor(Math.random() * 4);
    y = Math.floor(Math.random() * 4);
    } while (game[x][y]!=0)
    game[x][y]=2
    setTiles([...game]);
    mergedBoard[x][y] = 2;
    setMerged([...mergedBoard]);
}

const onKeyPressed = (event) => {
    
    if (event.keyCode === 38) {
      // up arrow
      moveUp();
      dir="up"
      setTimeout(resetMerged, 200);
  }
  else if (event.keyCode === 40) {
      // down arrow
    moveDown();
    dir="down"
    setTimeout(resetMerged, 200);
  }
  else if (event.keyCode === 37) {
     // left arrow
     moveLeft();
     dir="left"
     setTimeout(resetMerged, 200);
  }
  else if (event.keyCode === 39) {
     // right arrow
     moveRight();
     dir="right"
     setTimeout(resetMerged, 200);
  }
  
}

const resetMerged = () => {
    mergedBoard = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    setMerged([...mergedBoard]);
}

const newGame = () => {
    mergedBoard = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    setMerged([...mergedBoard]);
    game = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    setTiles([...game]);
    score = 0;
    x = Math.floor(Math.random() * 3);
    y = Math.floor(Math.random() * 3);
    game[x][y]=2
}


 
  return (
      <div className="game">
        <p className="header">2048</p>
        <div className="extra">
            <div className="score-div">
                <Button className="score" disabled>Score: {score}</Button>  
            </div>
            <div className="new-game-div">
                <Button className="new-game" onClick={newGame}>NEW GAME</Button>
            </div>
        </div>
          <Board tiles={tiles} merged={merged}/>
     </div>
  )
}

export default Game