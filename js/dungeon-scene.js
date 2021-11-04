/*

Dungeon Scene

*/

var cursors;
var speed = 200;

var dungeonScene = new Phaser.Class({
	Extends: Phaser.Scene,
	initialize: function(){
		Phaser.Scene.call(this, {"key":"dungeonScene"});
	},
	init: function(){},
	preload: function(){
		
		this.load.image("player","assets/tempPlayer.png");
		
	},
	create: function(){
		
		var text  = this.add.text(0,0,"DungeonScene", {
			fontsize: 20,
			color: "#ff5733",
			fontStyle: "bold"
		});
		
		player = this.physics.add.image(30,30,"player");
		player.setMaxVelocity(200);
		player.setCollideWorldBounds(true);
		
		cursors = this.input.keyboard.createCursorKeys();
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