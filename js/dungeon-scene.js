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
	},
	init: function(){},
	preload: function(){
		
		this.load.spritesheet("player","assets/brian_sprite_32x_32x_v2.png", {frameWidth: 32, frameHeight: 32});
		
		
	},
	create: function(){
		
		var text  = this.add.text(0,0,"DungeonScene", {
			fontsize: 20,
			color: "#ff5733",
			fontStyle: "bold"
		});
		
		//Initialize User Input
		cursors = this.input.keyboard.createCursorKeys();
		
		//Initialize Physics for Dungeon
		player = this.physics.add.sprite(300,300,"player");
		player.setScale(2);
		player.setMaxVelocity(200);
		player.setCollideWorldBounds(true);
		
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
		
		//for scene debug
		dungeon.generateGraph();
		dungeon.printGraphConsole();
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

		
	}

});