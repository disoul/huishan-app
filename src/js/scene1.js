$(document).on("pageinit", "#start-scene", function(){
	$("#start-scene").on("tap", function(){
		$.mobile.changePage("#select-scene",{});
	})
});
