var leftselect = '',
	rightselect = '';

function tapEvent(element,id){
	$("#"+element+"_select").on("tap",function(){
		leftselect = element;
		if (element == "hair1"){
			createRightList(id,["6BB7CA","ABB368"]);
		}else{
			rightselect = '';
		}
		chageImg(leftselect+rightselect,id);
	})
}

function chageImg(name,id){
	$("#"+id).fadeOut();
	$("#"+id).remove();
	var decoration = '<div style="display:none;" id="'+id+'" class="model"><img src="./src/image/main-scene/'+model+name+'.png"></div>';
	$(".canvas").append(decoration);
	$("#"+id).fadeIn();
}

function domCreate(step){
	//Pre
	if (step == 0) {
		$("#left-control").css("height",$("#left-img").css("height"));
		$("#right-control").css("height",$("#right-img").css("height"));
	}

	if (step == 6) {
		$(".step:eq(5) p").css("color","#808EA9");
		$(".arrow:eq(4)").css("color","#808EA9");
		$(".complete p").css("display","block");
		return;
	}

	//Creat Left List 
	$(".left-icon").remove();
	for (var i = 0; i < data[step].num; i++) {
		console.log(data[step].num);
		var select = '<div id="'+data[step].name+(i+1).toString()+'_select" class="left-icon"><img src="./src/image/main-scene/'+model+data[step].name+'_select_'+(i+1).toString()+'.png" alt=""></div>';
		$("#left-control #container").append(select);
		
		//Add Events
		tapEvent(data[step].name+(i+1).toString(),data[step].name);
	}

	//Creat Right List
	$(".right-icon").remove();
	if (data[step].right != undefined) {
		leftselect = data[step].name;
		createRightList(leftselect,data[step].right);
	}

	//Change Text	
	$(".step:eq("+(step-1).toString()+") p").css("color","#808EA9");
	$(".step:eq("+step.toString()+") p").css("color","#EC7F37");
	$(".arrow:eq("+(step-2).toString()+")").css("color","#808EA9");
	$(".arrow:eq("+(step-1).toString()+")").css("color","#B26855");
	
	
}

function createRightList(leftselect,colors){
	$(".right-icon").remove();

	rightselect = colors[0];
	console.log(rightselect);
	var id = leftselect;
	Array().slice.call(colors).forEach(function(color){
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
