var domCreate = function(step){
	if (step == 1){
		$(".left-iron").remove();
		var left_list_control = '<div id="control" class="left-list"></div>';
		$("#main-scene").append(left_list_control);
		$("#control").css("height",$("#img").height().toString()+"px");
		var face1_select = '<div class="left-iron" id="face1_select"><img src="./src/image/main-scene/face_select_1.png" alt=""></div>';
		var face2_select = '<div class="left-iron" id="face2_select"><img src="./src/image/main-scene/face_select_2.png" alt=""></div>';
		$("#control").append(face1_select);
		$("#control").append(face2_select);
		$(".left-iron").css("height",$(".left-iron").css("width"));
	}
}
