/*

Select Screen

	Allow player to choose their character for this dungeon
	Allow player to choose dungeon difficulty
		Dungeon in dungeon-scene should generate based on this
		information

*/

var selectScene = new Phaser.Class({
	Extends: Phaser.Scene,
	initialize: function(){
		Phaser.Scene.call(this, {"key":"selectScene"});
	},
	init: function(){},
	preload: function(){
		
		this.load.image("selectScreen","assets/dungeonScreenSample.png");
		
	},
	create: function(){
		this.add.image(0,0,"selectScreen").setOrigin(0,0);
		
		var text  = this.add.text(0,0,"SelectScene", {
			fontsize: 20,
			color: "#ff5733",
			fontStyle: "bold"
		});
		
		//for scene debug
		this.input.on("pointerup", function(pointer){
			this.scene.start("dungeonScene");
		}, this);
	},
	update: function(){}

});