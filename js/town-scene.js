/*
	TownScreen
		This screen should:
			Allow player to purchase upgrades and place buildings
			Player will carry upgrades into Dungeon
*/

var townScene = new Phaser.Class({
	Extends: Phaser.Scene,
	initialize: function(){
		Phaser.Scene.call(this, {"key":"townScene"});
	},
	init: function(){
		
	},
	preload: function(){
		this.load.image("sampleTown","assets/townScreenSample.png");
	},
	create: function(){
		this.add.image(0,0,"sampleTown").setOrigin(0,0);
		
		var text  = this.add.text(0,0,"TownScene", {
			fontsize: 20,
			color: "#ff5733",
			fontStyle: "bold"
		});
		
		//for scene debug
		this.input.on("pointerup", function(pointer){
			this.scene.start("selectScene");
		}, this);
	},
	update: function(){}

});