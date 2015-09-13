$(document).on("pageinit", "#introduce-scene", function(){
	setTimeout('$("#introduce-scene .wrapper").css("z-index", "1");$("#introduce-scene .wrapper").css("opacity", "1");',1000);
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
		$("#ni img").remove();
		$("#shadow").remove();
		$(".canvas div:not(#ni)").remove();
		step = 0;
		var img = '<img src="./src/image/main-scene/'+model+'/'+'model.png" alt="">    ';
		var shadow = '<div id="shadow" class="model"><img src="./src/image/main-scene/o/model_sh.png" alt=""></div>';
		$(".canvas").append(shadow);
		$("#ni").append(img);
	});
	$("#model2").on("tap", function(){
		model = 'u';
		$("#ni img").remove();
		$("#shadow").remove();
		$(".canvas div:not(#ni)").remove();
		step = 0;
		var img = '<img src="./src/image/main-scene/'+model+'/'+'model.png" alt="">    ';
		$("#ni").append(img);
	});
});
