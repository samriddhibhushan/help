class Game {
  constructor(){

  }

 

   start(){
    if(gameState === 0){
     
      form = new Form()
      form.display();
    }

    //img n sprites
       earth=createSprite(displayWidth/2, displayHeight-300);
       earth.addImage(earthImg);
    
  }

  play(){
//    form.hide();
    
    Player.getPlayerInfo();
  
    
    if(playerCount ===1){
      background(0);
      image(earthImg, 0,-displayHeight*4,displayWidth, displayHeight*5);
      if(frameCount%60===0){
        astro=createSprite(random(0,displayWidth),-10,10,10);
        astro.addImage( );
        astro.scale(ramdom(0.1,3));
    }
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x;
      var y=200;


    }

    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.x.position=player.x.position-10;
    }
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.x.position=player.x.position+10;
    }
    
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    
  }
}
