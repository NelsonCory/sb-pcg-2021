/*
	TownScreen

*/

var townScene = new Phaser.Class({
	Extends: Phaser.Scene,
	initialize: function(){
		Phaser.Scene.call(this, {"key":"townScene"});
	},
	init: function(){
		
	},
	preload: function(){
		
	},
	create: function(){
		
		var text  = this.add.text(0,0,"TownScene", {
			fontsize: 20,
			color: "#ff5733",
			fontStyle: "bold"
		});
	},
	update: function(){}

});