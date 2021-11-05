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
		
		this.load.image("player","assets/catSample.png");
		
		
	},
	create: function(){
		
		var text  = this.add.text(0,0,"DungeonScene", {
			fontsize: 20,
			color: "#ff5733",
			fontStyle: "bold"
		});
		
		player = this.physics.add.image(30,30,"player");
		player.setScale(0.4);
		player.setMaxVelocity(200);
		player.setCollideWorldBounds(true);
		
		cursors = this.input.keyboard.createCursorKeys();
		
		
		//for scene debug
		this.input.on("pointerup", function(pointer){
			this.scene.start("townScene");
		}, this);
		dungeon.generateGraph();
		dungeon.printGraphConsole();
	},
	update: function(){
		
		//horizontal movement
		if(cursors.left.isDown){
			player.setVelocityX(-speed);
		}
		else if (cursors.right.isDown){
			player.setVelocityX(speed);
		}
		else{
			player.setVelocityX(0);
		}
		
		//vertical movement
		if (cursors.up.isDown){
			player.setVelocityY(-speed);
		}
		else if (cursors.down.isDown){
			player.setVelocityY(speed);
		}
		else{
			player.setVelocityY(0);
		}
		
	}

});