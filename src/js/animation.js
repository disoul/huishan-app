$(document).ready(function(){
	var onTransitionEnd = function(e){ 
		console.log('TRANSITION FINISHED');
		if (callbackFlag){
			callbackFlag = false;
			domCreate(step);
			$(".left-list").css("top","0");
		}
	
	}
	var eventName = document.body.style.webkitBorderRadius?
	                "webkitTransitionEnd":
	                "transitionend";
	$(".left-list:not(#container)").bind(eventName, onTransitionEnd);



});
