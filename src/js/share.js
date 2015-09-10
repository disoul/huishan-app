$(document).on("pageinit", "#share-scene", function(){
	$("#share-scene").append($(".canvas").clone());
	$("#share-scene #canvaspaper").remove();
});
