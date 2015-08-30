var domCreate = function(step){
	if (step == 1){
		//Creat Left-List
		$("#left-control").fadeOut();
		var left_list_control = '<div id="left-control" class="left-list"></div>';
		$("#main-scene").append(left_list_control);
		$("#left-control").css("height",$("#left-img").height().toString()+"px");
		var face1_select = '<div class="left-iron" id="face1_select"><img src="./src/image/main-scene/face_select_1.png" alt=""></div>';
		var face2_select = '<div class="left-iron" id="face2_select"><img src="./src/image/main-scene/face_select_2.png" alt=""></div>';
		$("#left-control").append(face1_select);
		$("#left-control").append(face2_select);
		$(".left-iron").css("height",$(".left-iron").css("width"));


		//Creat Top-List
		$("#top-mask").css("height",$("#top-img").height().toString()+"px");


		//Add Events
		$("#face1_select").on("tap",function(){
			$("#face").fadeOut();
			$("#face").remove();
			var face_decoration = '<div style="display:none;" id="face" class="model"><img src="./src/image/main-scene/face1.png" alt=""></div>';
			$(".canvas").append(face_decoration);
			$("#face").fadeIn();
		});
		$("#face2_select").on("tap",function(){
			$("#face").fadeOut();
			$("#face").remove();
			var face_decoration = '<div style="display:none;" id="face" class="model"><img src="./src/image/main-scene/face2.png" alt=""></div>';
			$(".canvas").append(face_decoration);
			$("#face").fadeIn();
		});

	}
}
