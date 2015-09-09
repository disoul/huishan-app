$(document).on("pageinit", "#introduce-scene", function(){
	var tapflag = false;
	$("body").on("tap",function(){
		$("#introduce-scene .wrapper").css("opacity", "1");
		if (tapflag) {
			location.href = '#introduce-2-scene';
		}
		tapflag = true;
	});
});

$(document).on("pageshow", "#introduce-2-scene", function(){
	$("#paper1").css("top", "0");
	var flag = false;
	$("body").on("tap", function(){
		if (flag) return;
		flag = true;
		$("#paper1").bind(eventName, paperTransitionEnd);
		$("#paper1").css("top", "-3.3rem");
	});

	$("#model1").on("tap", function(){
		model = 'o';
	});
	$("#model2").on("tap", function(){
		model = 'u';
	});
});
