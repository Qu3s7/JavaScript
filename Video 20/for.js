var  jmlangkot = 10;
var noangkot = 1;
var angkotberoprasi = 8; 

while(noangkot <= angkotberoprasi){
	console.log('Angkot No. '+ noangkot + ' Beroprasi dengan Baik.');
noangkot++;
}

for(noangkot = angkotberoprasi + 1; noangkot <= jmlangkot; noangkot++ ){
	console.log('Angkot No. ' + noangkot + ' sedang tidak beroprasi');
}