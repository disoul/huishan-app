var aniFlag = 0;

$(document).ready(function(){
	$("#main-scene").on("tap",function(){
		if (aniFlag != 0) return; 
		aniFlag++;
		domCreate(1);
		var listHeight = $(".left-list").height();
		$(".left-list").css("top","-"+listHeight.toString()+"px");
		$(".left-list").animate({top: "0"},"slow");

		$(".right-list").css("bottom","-"+listHeight.toString()+"px");
		$(".right-list").animate({bottom: "0"},"slow");

	});
});
