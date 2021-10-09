class Form {

  constructor() {
    this.button = createButton('start');
    this.reset=createButton("start Over");
  }
  hide(){
    this.button.hide();
  }

  display(){
   
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    
  
    this.button.mousePressed(()=>{
      this.button.hide();
      playerCount+=1;
      

    });
     
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    
    })

  }
}
