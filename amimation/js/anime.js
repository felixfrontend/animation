var lineDrawing = anime({
	targets: '#lineDrawing path',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'linear',
	duration: 5000,
	// delay: function(el, i) { return i * 1000 },
	loop:1,
	direction:1,
	// update:function() {
	// 	if()
	// },
	complete: function(anim) {
		document.querySelector('path').setAttribute("fill", "red");
		document.querySelector('path').setAttribute("stroke", "red");
		document.querySelector('path').setAttribute("opacity", "1");
	}
	// complete: function(anim2) {
	// 	document.querySelector('path2').setAttribute("fill", "blue");
	//  }
});
