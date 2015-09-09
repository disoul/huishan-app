var eventName,transitionFadeOut,onTransitionEnd,paperTransitionEnd;

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
	paperTransitionEnd = function(e){
		$("#introduce-2-scene .model").fadeIn(function(){
			$("#paper2").css("top", "0");
		});
	}

});
