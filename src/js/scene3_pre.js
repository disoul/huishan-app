var aniFlag = 0;
var listHeight = 0;
var step = 1;

$(document).ready(function(){

	$("#main-scene").on("tap",function(){
		if (aniFlag != 0) return; 
		aniFlag++;
		domCreate(step);
		listHeight = $(".left-list").height();
		$(".left-list").css("top","-"+listHeight.toString()+"px");
		$(".left-list").animate({top: "0"},"slow");

		$(".right-list").css("bottom","-"+listHeight.toString()+"px");
		$(".right-list").animate({bottom: "0"},"slow");

	});

	$(".nexticon").on("tap",function(){
		console.log("nexticontap");
		step++;
		$(".msgbx-mask").css("z-index","1000");
		$(".msgbx-mask").css("opacity","1");
	});
	$(".msgbx-mask").on("tap",function(){
		console.log("masktap");
		$(this).animate({opacity:"0"},function(){
			$(this).css("z-index","-1000");
			$(".left-list").animate({top: "-"+listHeight.toString()+"px"},function(){
				domCreate(step);
				$(".left-list").animate({top: "0"});
			});
			$(".right-list").animate({bottom: "-"+listHeight.toString()+"px"});
			$(".right-list").animate({bottom: "0"});
		});
	});
	
});
