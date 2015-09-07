var listHeight = 0;
var step = 1;
var callbackFlag = false;

$(document).ready(function(){

	$(document).on("pageshow","#main-scene",function(){
		domCreate(step);
		listHeight = $(".left-list").height();
		$("#left-control").css("height",$("#left-img img").css("height"));
		$(".left-list").css("top","-"+listHeight.toString()+"px");
		$(".left-list").css("transition","top 1s ease");
		$(".left-list").css("top", "0");

		$(".right-list").css("bottom","-"+listHeight.toString()+"px");
		$(".right-list").css("transition","bottom 1s ease");
		$(".right-list").css("bottom","0");
		
	});

	$(".nexticon").on("tap",function(){
		console.log("nexticontap");
		step++;

			callbackFlag = true;
			$(".left-list").css("top","-"+listHeight.toString()+"px");
	});
	$(".msgbx-mask").on("tap",function(){
		console.log("masktap");
		$(this).animate({opacity:"0"},function(){
			$(this).css("z-index","-1000");
			callbackFlag = true;
			$(".left-list").css("top","-"+listHeight.toString()+"px");
		});
	});
	
});
