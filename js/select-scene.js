/*

Select Screen

*/

var selectScene = new Phaser.Class({
	Extends: Phaser.Scene,
	initialize: function(){
		Phaser.Scene.call(this, {"key":"selectScene"});
	},
	init: function(){},
	preload: function(){},
	create: function(){
		
		var text  = this.add.text(0,0,"SelectScene", {
			fontsize: 20,
			color: "#ff5733",
			fontStyle: "bold"
		});
	},
	update: function(){}

});