function tampilanangka(n){
	if(n === 0) return;
	console.log(n);
	return tampilanangka(n-1)
}

tampilanangka(10);