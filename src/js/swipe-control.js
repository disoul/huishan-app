$(function(){
	$("#left-control").swipe({
		swipe: function(event, direction, distance, fingerCount, fingerData){
			console.log("!");
			if ((direction == 'up') || (direction == 'down'))
				swipeit(swipelimit($(this),distance));
		},
		threshold: 0
	});
});

function swipelimit(swipeObj,distance) {
	
}

function swipeit(swipeObj,distance,direction) {
	var swipe_callback = function(Obj){
		if (parseint(Obj.css("top")) < 0) {
			Obj.css("top","0");
		}
	};
	
	if (direction == 'top'){
		swipeObj.animate({top: '+='+distance.toString()+'px' },swipe_callback($(this)));
	}else {
		swipeObj.animate({top: '-='+distance.toString()+'px' },swipe_callback($(this)));
	}
}
