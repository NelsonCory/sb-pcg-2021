/*
Dungeon Scene
	
	This scene should:
	
		Generate a dungeon and populate it with enemies
		Place the player in a valid tile
		return to townScreen once all enemies are dead, or the player dies

*/

class CellularGeneration {
	
	constructor(arg, dim,iter){
		
		this.arg = arg;
		this.dim = dim;
		this.iter = iter;
		//initialize graph
		this.graph = new Array(this.dim).fill(new Array(this.dim).fill("1"));
	}
	
	printGraphConsole(){
		/*
			Print graph to console
		*/
		console.log(this.graph);
	}
	
	generateGraph(){
		console.log("WIP generateGraph");
		
		
		
	}
	
}


var cursors;
var dungeon = new CellularGeneration(5,5,5);
var speed = 200;
var dungeonScene = new Phaser.Class({
	Extends: Phaser.Scene,
	initialize: function(){
		Phaser.Scene.call(this, {"key":"dungeonScene"});
		this.moveCam = false;
	},
	init: function(){},
	preload: function(){
		
		this.load.spritesheet("player","assets/brian_sprite_32x_32x_v2.png", {frameWidth: 32, frameHeight: 32});
		this.load.image("test_bg","assets/test_bg.png");
		this.load.image("monster","assets/monster.png");
		
	},
	create: function(){
		
		//debug
		let bg = this.add.image(0, 0, "test_bg");
		player = this.physics.add.sprite(300,300,"player");
		this.cameras.main.setBounds(-512,-512,512*2,512*2);
		this.physics.world.setBounds(-512,-512,512*2,512*2);
	
		
		//Initialize User Input
		cursors = this.input.keyboard.createCursorKeys();
		
		//Initialize Physics for Dungeon

		player.setScale(2);
		player.setMaxVelocity(200);
		player.setCollideWorldBounds(true);
		monster = this.physics.add.image(0,0,"monster");
		//Define animation loops
		this.anims.create({
			key: "left",
			frames: this.anims.generateFrameNumbers("player", {start: 24, end: 35}),
			frameRate: 8,
			repeat: -1
		});	
		this.anims.create({
			key: "right",
			frames: this.anims.generateFrameNumbers("player", {start: 12 , end: 23 }),
			frameRate: 8,
			repeat: -1
		});	
		this.anims.create({
			key: "idle",
			frames: this.anims.generateFrameNumbers("player", {start: 0 , end: 11}),
			frameRate: 3,
			repeat: -1
		});	
		this.anims.create({
			key: "downwards",
			frames: this.anims.generateFrameNumbers("player", {start: 36 , end: 47}),
			frameRate: 8,
			repeat: -1
		});	
		this.anims.create({
			key: "upwards",
			frames: this.anims.generateFrameNumbers("player", {start: 48 , end: 51}),
			frameRate: 8,
			repeat: -1
		});	

		//initial states of animations
		player.anims.play("idle", true);
		
		this.cameras.main.startFollow(player, true);
		
		//for scene debug
		dungeon.generateGraph();
		dungeon.printGraphConsole();
		
		this.physics.add.overlap(player, monster, this.they_touchin, null, this);
		
	},
	update: function(){
		
		//horizontal movement
		if(cursors.left.isDown){
			player.anims.play("left", true);
			player.setVelocityX(-speed);
		}
		else if (cursors.right.isDown){
			player.anims.play("right", true);
			player.setVelocityX(speed);
		}
		//vertical movement
		if(cursors.up.isDown){ //if up is only movement
	
			player.setVelocityY(-speed);
			if(cursors.left.isDown){
				player.anims.play("left", true);
				player.setVelocityX(-speed);
			}
			else if (cursors.right.isDown){
				player.anims.play("right", true);
				player.setVelocityX(speed);
			} else{
				player.anims.play("upwards", true);
			}
		}
		else if (cursors.down.isDown){ //if down is only movement
			player.setVelocityY(speed);
			if(cursors.left.isDown){
				player.anims.play("left", true);
				player.setVelocityX(-speed);
			}
			else if (cursors.right.isDown){
				player.anims.play("right", true);
				player.setVelocityX(speed);
			}
			else{
				player.anims.play("downwards", true);
			}
			
		}

		//if no movement is happening, play idle animation
		if(!(cursors.left.isDown || cursors.right.isDown || cursors.up.isDown || cursors.down.isDown)){
			player.anims.play("idle", true);
			}
		//no horizontal movement
		if(!(cursors.left.isDown || cursors.right.isDown)){
			player.setVelocityX(0);
		}
		if(!(cursors.up.isDown || cursors.down.isDown)){
			player.setVelocityY(0);
		}

		//MONSTER AI
		if(monster.x < player.x){
			monster.setVelocityX(speed/2);
		}
		else if(monster.x > player.x){
			monster.setVelocityX(-speed/2);
		}
		else{
			monster.setVelocityX(0);
		}
		
		
		if(monster.y < player.y){
			monster.setVelocityY(speed/2);
		}
		else if (monster.y > player.y){
			monster.setVelocityY(-speed/2);
		}
		else{
			monster.setVelocityY(0);
		}
		
	},
	they_touchin : function(){
		
		player.disableBody(true,true);
	}

});