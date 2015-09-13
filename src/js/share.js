$(document).on("pageinit", "#share-scene", function(){
	var sharescene = $("#share-scene");
	sharescene.append($(".canvas").clone());
	sharescene.find("#canvaspaper").remove();
	if (sharescene.find("#hair img").attr('src') == './src/image/main-scene/o/hair2.png') {
		sharescene.find("#hair").css("top", "-0.3rem");
	}

	$(".share").on("tap", function(){
		shareweixin.share();
	});
});

