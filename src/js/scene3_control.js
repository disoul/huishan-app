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

	if (step == 5) {
		//Create Left List 
		$(".left-icon").remove();
		
		//Creat Right List
		$(".right-icon").remove();
		createRightList("pant","DD564B","D1155C");

		//Change Text
		$(".step:eq(3) p").css("color","#808EA9");
		$(".step:eq(4) p").css("color","#EC7F37");
		$(".arrow:eq(2)").css("color","#808EA9");
		$(".arrow:eq(3)").css("color","#B26855");
	}

	if (step == 6) {
		//Create Left List
		$(".left-icon").remove();
		var decoration1 = '<div id="decoration1_select" class="left-icon"><img src="./src/image/main-scene/decoration_select_1" alt=""></div>';
		var decoration2 = '<div id="decoration2_select" class="left-icon"><img src="./src/image/main-scene/decoration_select_2" alt=""></div>';
		var decoration3 = '<div id="decoration3_select" class="left-icon"><img src="./src/image/main-scene/decoration_select_3" alt=""></div>';

		$("#left-control #container").append(decoration1,decoration2,decoration3);

		//Creat Right List
		$(".right-icon").remove();

		//Add Events
		tapEvent("decoration1", "decoration");
		tapEvent("decoration2", "decoration");
		tapEvent("decoration3", "decoration");

		//Change Text
		$(".step:eq(4) p").css("color","#808EA9");
		$(".step:eq(5) p").css("color","#EC7F37");
		$(".arrow:eq(3)").css("color","#808EA9");
		$(".arrow:eq(4)").css("color","#B26855");

	}

	if (step == 7) {
		
		$(".step:eq(5) p").css("color","#808EA9");
		$(".arrow:eq(4)").css("color","#808EA9");
		$(".complete p").css("display","block");
		
	}

	//Pre
	if (step == 0) {
		$("#left-control").css("height",$("#left-img").css("height"));
		$("#right-control").css("height",$("#right-img").css("height"));
	}

	//Creat Left List 
	$(".left-icon").remove();
	for (var i = 0; i++; i < data[step].num) {
		var select = '<div id="'+data[step].name+(i+1).toString()+'_select" class="left-icon"><img src="./src/image/main-scene/'+data[step].name+'_select_'+(i+1).toString()+'" alt=""></div>';
		$("#left-control #container").append(select);
		
		//Add Events
		tapEvent(data[step].name+i.toString(),data[step].name);
	}

	//Creat Right List
	$(".right-icon").remove();
	if (data[step].right != undefined) {
		createRightList(data[step].name,data[step].right[0],data[step].right[1]);
	}

	//Change Text	
	$(".step:eq("+(step-1).toString()+") p").css("color","#808EA9");
	$(".step:eq("+step.toString()+") p").css("color","#EC7F37");
	$(".arrow:eq("+(step-2).toString()+")").css("color","#808EA9");
	$(".arrow:eq("+(step-1).toString()+")").css("color","#B26855");
	
	
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
