var  jmlangkot = 10;
var noangkot = 1;
var angkotberoprasi = 6; 

for(noangkot = 1; noangkot <= jmlangkot; noangkot++){
	if (noangkot <= angkotberoprasi && noangkot !== 5) {
		console.log('Angkot No. '+ noangkot + ' Beroprasi')
	} else if (noangkot === 8 || noangkot === 10 || noangkot === 5 ) {
		console.log('Angkot No. '+ noangkot + ' Sedang Lembur')
	}else {
		console.log('Angkot No. '+ noangkot + ' Tidak Beroprasi')
	}
}