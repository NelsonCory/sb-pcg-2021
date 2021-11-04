/*

Select Screen

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
	},
	update: function(){}

});