var penumpang = ['sandhika',undefined,'doddy'];
var tambahPenumpang = function(namaPenumpang, penumpang) {
	//jika angkot kosong
	if( penumpang.length == 0 ){
		//tambah penumpang di awal array
		penumpang.push(namaPenumpang);
		//kembalikan isi array  & keluar dri function
		return penumpang
	} else {
		
		//telusuri seluruh kursi dari awal
		for(var i = 0; i < penumpang.length; i++){
			//jika ada kursi kosong
			if(penumpang[i] == undefined){
				// tambah penumpang di kursi tersebut
				penumpang[i] = namaPenumpang;
				//kembalikan isi array dan keluar
				return penumpang
			}
			//jika ada nama yang sama
			else if( penumpang[i] == namaPenumpang){ 
				//tampilkan kesalahanya
				console.log('Nama Penumpang Sudah ada');
				//kembalikan isi array dan keluar
				return penumpang;
			}
			//jika semua kursi terisi
			else if( i == penumpang.length - 1){
				//tambah penumpang di akhir array
				penumpang.push(namaPenumpang);
				//kembalikan isi array dan keluar
				return penumpang;
			}
					}
		}
}