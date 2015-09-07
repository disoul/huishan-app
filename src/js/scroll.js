function createScroll(){
	if (myScroll != undefined) {
		myScroll.destroy();
	
	}else {
		var myScroll;
	}

	myScroll = new IScroll("#left-control",{
		startY: -50
	});
}
