var listHeight = 0;
var step = 0;
var callbackFlag = false;
var model = 'o';

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
		if (step == 6) return;
		step++;
		callbackFlag = true;
		$(".left-list").css("top","-"+listHeight.toString()+"px");
	});
	$(".preicon").on("tap",function(){
		console.log("preicontap");
		if (step == 0) return;
		step--;
		callbackFlag = true;
		$(".left-list").css("top","-"+listHeight.toString()+"px");
	});
	
});
