class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/wood1.png");
      Box.visibility = threshold<3

    }
  
  };

  function keyPresses(){
    if(keyCode === 32){
      slingShot.attach(this.polygon);
    }
  }
  