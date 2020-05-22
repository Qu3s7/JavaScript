var tanya = true
while( tanya ){
	// pilihan player//
	var p = prompt('Pilih : gajah,semut,orang');

	//pilihan komputer//
	var comp = Math.random();
	console.log (comp);

	if(comp < 0.34) {
		comp = 'gajah';
	} else if (comp >= 0.34 && comp < 0.67 ){
		comp = 'orang';
	}else {
		comp = 'semut';
	}
	console.log(comp);


	var hasil = '';
	// rules//
	if(p == comp){
		hasil = 'SERI!';
	}else if( p == 'gajah'){
		hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
	} else if (p == 'orang'){
		hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG';
	} else if (p == 'semut'){
		hasil = (comp == 'orang') ? 'KALAH' : 'MENANG';
	} else {
		hasil = 'Pilihan Salah';
	}

	alert ('Kamu Memilih : ' + p ' dan komputer Memilih ' + comp + '\nMaka Hasilnya : Kamu ' + hasil);

	tanya = confirm('Lagi?');
}
alert('terimakasih telah bermain');