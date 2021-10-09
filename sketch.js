var bgform, bgformImg;
var spaceImg;
var spaceShip, spaceShipImg;
var astroImg, astro;
var blastImg;
var level=0;
var score=0;
var gameState=0;
var attack, attackImg;
var earth, earthImg;
var canvas;
var player,playername;
var database;
var game;
var form;
var playerCount;

function preload(){
    bgformImg=loadImage("images/bgform.gif");
    spaceShipImg=loadImage("images/hero.png");
    earthImg=loadImage("images/earth.jpg");
    astroImg=loadImage("images/aestro.png");
}

function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
     //database = firebase.database();
    game = new Game();
   
   
  

}


function draw(){
  if(gameState===0){
   game.start();
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}