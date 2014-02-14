console.log("elevader.js loaded");

$(document).ready(function() {
	var sprites = $("#sprites")[0];

	var main = function() {
		var canvas = $('#board')[0];

		var message = function(msg) {
			$('#messages').text(msg);
		};
		if (!canvas.getContext) {
			message("Shucks!  Try a different browser please?");
		}

		var ctx = canvas.getContext('2d');

		// Resize the canvas to a square that fits in the viewport.
		var vpw = verge.viewportW();
		var vph = verge.viewportH();
		var smaller = (vpw > vph) ? vph : vpw;
		canvas.width = smaller;
		canvas.height = smaller;
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		ctx.fillStyle = "rgb(240,240,240)";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		
		ctx.drawImage(sprites, 0, 0, 44, 44, 20, 20, 44, 44);

		var grid = new Grid(canvas.width, canvas.height, 10);
		grid.paint(ctx);
	};

	sprites.addEventListener("load", function() {
		main();
	}, false);

})();