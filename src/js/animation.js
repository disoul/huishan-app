var eventName,transitionFadeOut,onTransitionEnd;

$(document).ready(function(){
	onTransitionEnd = function(e){ 
		console.log('TRANSITION FINISHED');
		if (callbackFlag){
			callbackFlag = false;
			domCreate(step);
			$(".left-list").css("top","0");
		}
	
	}
	eventName = document.body.style.webkitBorderRadius?
	                "webkitTransitionEnd":
	                "transitionend";
	$(".left-list:not(#container)").bind(eventName, onTransitionEnd);

	transitionFadeOut = function(e){
		$(this).remove();

	}



});
