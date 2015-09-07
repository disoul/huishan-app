var leftselect = '',
	rightselect = '';

function tapEvent(element,id){
	$("#"+element+"_select").on("tap",function(){
		leftselect = element;
		if (element == "hair1"){
			createRightList(id,"6BB7CA","ABB368");
		}else{
			rightselect = '';
		}
		chageImg(leftselect+rightselect,id);
	})
}

function chageImg(name,id){
	$("#"+id).fadeOut();
	$("#"+id).remove();
	var decoration = '<div style="display:none;" id="'+id+'" class="model"><img src="./src/image/main-scene/'+name+'.png"></div>';
	$(".canvas").append(decoration);
	$("#"+id).fadeIn();
}

function domCreate(step){
	if (step == 1){
		//Creat List
		$("#left-control").css("height",$("#left-img").css("height"));
		$("#right-control").css("height",$("#right-img").css("height"));
		var face1_select = '<div class="left-icon" id="face1_select"><img src="./src/image/main-scene/face_select_1.png" alt=""></div>';
		var face2_select = '<div class="left-icon" id="face2_select"><img src="./src/image/main-scene/face_select_2.png" alt=""></div>';
		$("#left-control #container").append(face1_select,face2_select);
		$(".left-icon").css("height",$(".left-icon").css("width"));


		//Creat Top-List
		$("#top-mask").css("height",$("#top-img").height().toString()+"px");
		$(".step:eq(0) p").css("color","#EC7F37");


		//Add Events
		tapEvent("face1","face");
		tapEvent("face2","face");
	}

	if (step == 2){
		//Create Left List
		$(".left-icon").remove();
		var hair_select1 = '<div id="hair1_select" class="left-icon"><img src="./src/image/main-scene/hair_select_1.png" alt=""></div>';
		var hair_select2 = '<div id="hair2_select" class="left-icon"><img src="./src/image/main-scene/hair_select_2.png" alt=""></div>';
		var hair_select3 = '<div id="hair3_select" class="left-icon"><img src="./src/image/main-scene/hair_select_3.png" alt=""></div>';

		$("#left-control #container").append(hair_select1,hair_select2,hair_select3);

		//Add Events
		tapEvent("hair1","hair");		
		tapEvent("hair2","hair");		
		tapEvent("hair3","hair");		

		//Change Text
		$(".step:eq(0) p").css("color","#808EA9");
		$(".step:eq(1) p").css("color","#EC7F37");
		$(".arrow:eq(0)").css("color","#B26855");
	}

	if (step == 3){
		//Create Left List
		$(".left-icon").remove();
		leftselect = "clothes";

		//Create Right List
		createRightList("clothes","521840","252E80");

		//Change Text
		$(".step:eq(1) p").css("color","#808EA9");
		$(".step:eq(2) p").css("color","#EC7F37");
		$(".arrow:eq(0)").css("color","#808EA9");
		$(".arrow:eq(1)").css("color","#B26855");

	}

	if (step == 4){
		//Create Left List
		$(".left-icon").remove();
		var pattern1 = '<div id="pattern1_select" class="left-icon"><img src="./src/image/main-scene/pattern_select_1.png" alt=""></div>';
		var pattern2 = '<div id="pattern2_select" class="left-icon"><img src="./src/image/main-scene/pattern_select_2.png" alt=""></div>';
		var pattern3 = '<div id="pattern3_select" class="left-icon"><img src="./src/image/main-scene/pattern_select_3.png" alt=""></div>';
		var pattern4 = '<div id="pattern4_select" class="left-icon"><img src="./src/image/main-scene/pattern_select_4.png" alt=""></div>';
		$("#left-control #container").append(pattern1,pattern2,pattern3,pattern4);

		createScroll();
		//Add Events
		tapEvent("pattern1","pattern");
		tapEvent("pattern2","pattern");
		tapEvent("pattern3","pattern");
		tapEvent("pattern4","pattern");

		//Create Right List
		$(".right-icon").remove();
		
		//Change Text
		$(".step:eq(2) p").css("color","#808EA9");
		$(".step:eq(3) p").css("color","#EC7F37");
		$(".arrow:eq(1)").css("color","#808EA9");
		$(".arrow:eq(2)").css("color","#B26855");

	}
}

function createRightList(){
	$(".right-icon").remove();

	rightselect = arguments[1];
	var id = Array().shift.call(arguments);
	Array().slice.call(arguments).forEach(function(color){
		var colorblock = '<div class="right-icon" id="color-'+color+'" style="background-color:#'+color+';"></div>';
		$("#right-control").append(colorblock);
		rightTap($("#color-"+color),id,color);

	});
}

function rightTap(node,id,color){
	node.on("tap",function(){
		rightselect = color;
		chageImg(leftselect+rightselect,id);
	});
}
