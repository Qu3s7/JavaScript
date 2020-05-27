var penumpang = [];
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

var hapusPenumpang = function(namaPenumpang, penumpang){
	//jika angkot Kosong
	if(penumpang.length == 0){
		//Tampilkan angkot masih kosong
		console.log('Angkot Masih Kosong');
		//tidak mungkin penumpang turun
		//kembalikan isi array dan keluar
	}
	//else
	else{
		//telusuri kursi dari awal
		for(var i =0; i < penumpang.length; i++){
			if(penumpang[i] == namaPenumpang ){
				penumpang[i] = undefined;
				return penumpang
			}else if(i == penumpang.length - 1){
				console.log('Nama Penumpang Tidak Ada Didalam Angkot');

			}
		}
			//jika nama penumpang sesuai
				//hapus dengan mengubah namanya
				//menjadi undefined
				//return
			//jika tidak ada nama yng sesuai
				//error message
				//return
			
	}
				return penumpang;
}