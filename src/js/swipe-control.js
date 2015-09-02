$(function(){
	$("#left-control").swipe(function(){
		swipe: function(event, direction, distance, fingerCount, fingerData){
			if (direction == 'up') {
				swipeit(swipelimit($(this),distance))
			}
		}
	});
});

function swipelimit(swipeObj,distance) {
	
}

function swipeit(swipeObj,distance,direction) {
	var swipe_callback = function(Obj){
		if (Obj.css("top"))
	}
	
	if (direction == 'top'){
		swipeObj.animate({top: '+='+distance.toString()+'px' });
	}else {
		swipeObj.animate({top: '-='+distance.toString()+'px' });
	}
}
