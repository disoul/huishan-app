function createScroll(){
	console.log(myScroll);
	if (myScroll != undefined) {
		myScroll.destroy();
	
	}else {
		var myScroll;
		console.log('2');
	}


	myScroll = new IScroll("#left-control",{
	});
}
