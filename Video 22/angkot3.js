var  jmlangkot = 10;
var noangkot = 1;
var angkotberoprasi = 8; 

for(noangkot = 1; noangkot <= jmlangkot; noangkot++){
	if (noangkot <= angkotberoprasi) {
		console.log('Angkot No. '+ noangkot + ' Beroprasi')
	} else{
		console.log('Angkot No. '+ noangkot + ' Tidak Beroprasi')
	}
}