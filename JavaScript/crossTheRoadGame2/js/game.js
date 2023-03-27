//create a new game scene
let gameScene= new Phaser.Scene("Game");
gameScene.init=function(){
    //speed for my player
    this.linkSpeed=3
    // enemny speed
    this.octorokSpeed=0.8;
    this.octorokMaxSpeed = 4
    this.octorokMinSpeed = 1
    this.rockSpeed=this.octorokSpeed
    //boundaries
    this.octorokMinY = 20;
    this.octorokMaxY = 345;
    this.canshoot= false
    this.timer= Math.floor(Math.random() *200)
}
gameScene.preload=function(){
    //load our images :D
    this.load.image("background","assets/zeldabackground.jpg")
    this.load.image("octorok","assets/octorok.png")
    this.load.image("link","assets/link.png")
    this.load.image("triforce","assets/triforce.png")
    this.load.image("rock","assets/rock.png")
    this.load.image("gameoverscreen", "assets/gameOverScreen.png")
    this.load.image("gamewonscreen", "assets/gamewonscreen.jpg")
}
//called once preload is over
gameScene.create=function(){
    this.bg=this.add.sprite(640/2,360/2,"background")
    this.gameoverscreen=this.add.sprite(5500,1450, "gameoverscreen")
    this.rock=this.add.sprite(515,160,"rock")
    this.octorok=this.add.sprite(515,160,"octorok")
    this.link=this.add.sprite(80,165,"link")
    this.triforce=this.add.sprite(550,145,"triforce")
    this.gamewonscreen=this.add.sprite(300,1200, "gamewonscreen")// 300 120

    //set origin point
    //bg.setOrigin(0,0);

    
    this.link.scaleX=0.1
    this.link.scaleY=0.1
    this.link.flipX=true

    this.octorok.scaleX=0.1
    this.octorok.scaleY=0.1
    this.octorok.angle=90

    this.triforce.scaleX=0.13
    this.triforce.scaleY=0.13

    this.rock.scaleX=0.10
    this.rock.scaleY=0.10

    this.gamewonscreenX=0.1
    this.gamewonscreenY-0.1

    //add keys
    keys=this.input.keyboard.addKeys("W,A,S,D")

    //octorok group
    this.octoroks = this.add.group({
        key: "octorok",
        repeat : 2,
        setXY:{
            x: 230,
            y: 100,
             stepX: 100,
             StepY: 20
        }
    })
    //setting scale to all group elements
    Phaser.Actions.ScaleXY(this.octoroks.getChildren(), -0.9, -0.9)

    //set flipX and speed
    Phaser.Actions.Call(this.octoroks.getChildren(), function(octorok){
        //flip angle of octorok
        octorok.angle= 90
        //set speed
        let dir= Math.random() < 0.5?1:-1
        let speed= this.octorokMinSpeed + Math.random() * (this.octorokMaxSpeed - this.octorokMinSpeed)
        octorok.speed = dir * speed
    }, this)
}
//this will run up to 60 times per second
gameScene.update=function(){
    //link movement

    if(keys.W.isDown && this.link.y >20){
        this.link.y -= this.linkSpeed
    }
    else if(keys.S.isDown && this.link.y <330){
        this.link.y += this.linkSpeed
    }
    else if(keys.D.isDown && this.link.x <620){
        this.link.x += this.linkSpeed
    }
    else if(keys.A.isDown && this.link.x >20){
        this.link.x -= this.linkSpeed
    }




    let linkRect=this.link.getBounds();
    let triforceRect=this.triforce.getBounds();
    let octorok1Rect=this.octorok.getBounds();
    let rockRect=this.rock.getBounds();
    //check if you win
    if(Phaser.Geom.Intersects.RectangleToRectangle(linkRect,triforceRect)){
    console.log("hit the goal")
    return this.gameWon()
    }
    if(Phaser.Geom.Intersects.RectangleToRectangle(linkRect,octorok1Rect)){
        console.log("ouch")
        return this.gameOver()
    }
    if(Phaser.Geom.Intersects.RectangleToRectangle(linkRect,rockRect)){
        console.log("ouch")
        return this.gameOver()
    }
    //get octorok
    let octorok = this.octoroks.getChildren()
    let numOctorok = octorok.length
    // enemy movement
    for(let i=0; i<numOctorok;i++){
    octorok[i].y += octorok[i].speed
    let conditionUp = octorok[i].speed <0 && octorok[i].y <=this.octorokMinY
    let conditionDown = octorok[i].speed > 0 && octorok[i].y >= this.octorokMaxY
    if(conditionUp || conditionDown){
        octorok[i].speed *= -1
    }
    this.octorok.y += this.octorokSpeed
    this.rock.y+= this.rockSpeed
    //check we haven't passed min Y
    if(this.octorokSpeed < 0 && this.octorok.y <= this.octorokMinY) {
        this.octorokSpeed *= -1
        this.rockSpeed*= -1
    }
    //check we haven't passed max Y
    if(this.octorokSpeed > 0 && this.octorok.y >= this.octorokMaxY) {
        this.octorokSpeed *= -1;
        this.rockSpeed*= -1
    }
    //check enemy overlap
    let octorokRect = octorok[i].getBounds();

    if(Phaser.Geom.Intersects.RectangleToRectangle(linkRect,octorokRect)) {
        console.log ("ouch")
        return this.gameOver()
    }
    }
    if(this.canshoot==false){
        this.timer--
        if(this.timer==0){
            this.canshoot=true
            console.log(this.timer)
        }

    }
    if(this.canshoot==true){
        this.rockSpeed=0
        this.rock.x-=4
        if(this.rock.x<=0){
            this.canshoot=false
            this.timer=Math.floor(Math.random() *200)
            this.rock.x=515
            this.rock.y=this.octorok.y
            this.rockSpeed=this.octorokSpeed
        }
    }

}
gameScene.gameOver = function() {
    this.link.destroy(true)
        //game over screen
    this.gameoverscreen.setPosition(640/2,360/2);
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
gameScene.gameWon = function(){
    this.link.destroy(true)
    this.gamewonscreen.setPosition(640/2,360/2);
    //initiated game over sequence
    this.isTerminating = true
    //audio
    //shake camera
    this.cameras.main.shake(1000)
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

