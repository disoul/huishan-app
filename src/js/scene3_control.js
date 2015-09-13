var leftselect = '',
	rightselect = '',
	domCreateflag = true;

function tapEvent(element,id){
	$("#"+element+"_select").on("tap",function(){
		leftselect = element;
		if ((element == "hair1") && (model == "o")){
			createRightList(id,["6BB7CA","ABB368"]);
		}else{
			rightselect = '';
			$(".right-icon").remove();
		}
		chageImg(leftselect+rightselect,id);
	})
}

function chageImg(name,id){
	$("#"+id).fadeOut();
	$("#"+id).remove();
	var decoration = '<div style="display:none;" id="'+id+'" class="model"><img src="./src/image/main-scene/'+model+'/'+name+'.png"></div>';
	$(".canvas").append(decoration);

	if ((name == 'hair2') && (model == 'o')) $("#"+id).css("top","-0.32rem"); // bug
	
	$("#"+id).fadeIn();
}

function domCreate(step){
	//Pre
	if (domCreateflag) {
		domCreateflag = false;
		$("#left-control").css("height",$("#left-img").css("height"));
		$("#right-control").css("height",$("#right-img").css("height"));

		$("#top-mask .step").each(function(){
			this.state = 'no';  //no or visit or now
		});
		$("#top-mask .arrow").each(function(){
			this.isme = false;
		})  //Add Dom attr
	}

	if (step == 6) {
		$(".step:eq(5) p").css("color","#808EA9");
		$(".arrow:eq(4)").css("color","#808EA9");
		$(".complete p").css("display","block");
		setTimeout('$.mobile.changePage( "#share-scene", {changeHash: false});', 1000)
		return;
	}

	//Change Test
	$(".step").each(function(){
		console.log(this.state);
		if ( this.state == 'now' ) {
			this.state = 'visit';
			this.firstChild.style.color = '#808EA9';
		}
	});
	var nowtext = $(".step:eq("+step.toString()+")");
	nowtext[0].state = 'now';
    nowtext.find('p').css('color', '#EC7F37');	

	//Change Arrow
	$(".arrow").each(function(){
		if ( this.isme == true ) {
			this.isme = false;
			this.firstChild.style.color = '#BEAEAE';
		}
	});
	if (step > 0) {
		var nowarrow = $(".arrow:eq("+(step-1).toString()+")");
		nowarrow[0].isme = true;
		nowarrow.find('span').css('color', '#B26855');
	}

	//Creat Left List 
	$(".left-icon").remove();
	for (var i = 0; i < data[step].num; i++) {
		console.log(data[step].num);
		var select = '<div id="'+data[step].name+(i+1).toString()+'_select" class="left-icon"><img src="./src/image/main-scene/'+model+'/'+data[step].name+'_select_'+(i+1).toString()+'.png" alt=""></div>';
		$("#left-control #container").append(select);
		
		//Add Events
		tapEvent(data[step].name+(i+1).toString(),data[step].name);
	}

	//Creat Right List
	$(".right-icon").remove();
	if ((data[step].right != undefined) && model == 'o') {
		leftselect = data[step].name;
		createRightList(leftselect,data[step].right);
	}
	if ((data[step].uright != undefined) && model == 'u') {
		leftselect = data[step].name;
		createRightList(leftselect,data[step].uright);
	}

	//Change Text	
	
	
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
