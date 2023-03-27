//create a new game scene
let gameScene= new Phaser.Scene("Game");
gameScene.init=function(){
    //speed for my player
    this.playerSpeed=3
    // enemny speed
    this.dragonSpeed=0.8;
    this.dragonMaxSpeed = 4
    this.dragonMinSpeed = 1
    this.rockSpeed=this.dragonSpeed
    //boundaries
    this.dragonMinY = 20;
    this.dragonMaxY = 345;
    this.canshoot= false
    this.timer= Math.floor(Math.random() *200)
}
gameScene.preload=function(){
    //load our images :D
    this.load.image("background","assets/background.png")
    this.load.image("player","assets/player.png")
    this.load.image("dragon","assets/dragon.png")
    this.load.image("treasure","assets/treasure.png")
}
//called once preload is over
gameScene.create=function(){
    this.bg=this.add.sprite(640/2,360/2,"background")
    this.dragon=this.add.sprite(515,160,"dragon")
    this.player=this.add.sprite(80,165,"player")
    this.triforce=this.add.sprite(550,145,"treasure")
  
    //set origin point
    //bg.setOrigin(0,0);

    
    this.player.scaleX=0.5
    this.player.scaleY=0.5

    this.dragon.scaleX=0.5
    this.dragon.scaleY=0.5
    this.dragon.flipX=true

    this.triforce.scaleX=0.13
    this.triforce.scaleY=0.13


    //dragon group
    this.dragons = this.add.group({
        key: "dragon",
        repeat : 2,
        setXY:{
            x: 230,
            y: 100,
             stepX: 100,
             StepY: 20
        }
    })
    //setting scale to all group elements
    Phaser.Actions.ScaleXY(this.dragons.getChildren(), -0.9, -0.9)

    //set flipX and speed
    Phaser.Actions.Call(this.dragons.getChildren(), function(dragon){
        //flip angle of dragon
        dragon.angle= 90
        //set speed
        let dir= Math.random() < 0.5?1:-1
        let speed= this.dragonMinSpeed + Math.random() * (this.dragonMaxSpeed - this.dragonMinSpeed)
        dragon.speed = dir * speed
    }, this)
}
//this will run up to 60 times per second
gameScene.update=function(){
    //player movement

    if(this.input.activePointer.isDown){
        this.player.x += this.playerSpeed
    }




    let playerRect=this.player.getBounds();
    let triforceRect=this.triforce.getBounds();
    let dragon1Rect=this.dragon.getBounds();
    //check if you win
    if(Phaser.Geom.Intersects.RectangleToRectangle(playerRect,triforceRect)){
    console.log("hit the goal")
        return this.gameOver()
    }
    if(Phaser.Geom.Intersects.RectangleToRectangle(playerRect,dragon1Rect)){
        console.log("ouch")
        return this.gameOver()
    }
    
    //get dragon
    let dragon = this.dragons.getChildren()
    let numdragon = dragon.length
    // enemy movement
    for(let i=0; i<numdragon;i++){
    dragon[i].y += dragon[i].speed
    let conditionUp = dragon[i].speed <0 && dragon[i].y <=this.dragonMinY
    let conditionDown = dragon[i].speed > 0 && dragon[i].y >= this.dragonMaxY
    if(conditionUp || conditionDown){
        dragon[i].speed *= -1
    }
    this.dragon.y += this.dragonSpeed
    //check we haven't passed min Y
    if(this.dragonSpeed < 0 && this.dragon.y <= this.dragonMinY) {
        this.dragonSpeed *= -1
        this.rockSpeed*= -1
    }
    //check we haven't passed max Y
    if(this.dragonSpeed > 0 && this.dragon.y >= this.dragonMaxY) {
        this.dragonSpeed *= -1;
        this.rockSpeed*= -1
    }
    //check enemy overlap
    let dragonRect = dragon[i].getBounds();

    if(Phaser.Geom.Intersects.RectangleToRectangle(playerRect,dragonRect)) {
        console.log ("ouch")
        return this.gameOver()
    }
    }

}
gameScene.gameOver = function() {
    //initiated game over sequence
    this.isTerminating = true
    //shake camera
    this.cameras.main.shake(100)
    //listen for event completion
    this.cameras.main.on("camerashakecomplete", function(camera, effect){
    //fade out
    this.cameras.main.fade(5000);
    }, this);
    this.cameras.main.on("camerafadeoutcomplete", function (camera, effect){
        //restart the Scene
        this.scene.restart();
    }, this);

}
//set up our configuration
let config={
    type: Phaser.AUTO, //phaser will use your webGL if available if it's not available it will use our canvas :)
    width: 640,
    height: 360,
    scene: gameScene
}
let game= new Phaser.Game(config);