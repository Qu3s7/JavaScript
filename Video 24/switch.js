var item = prompt('Masukan Nama Makanan / minuman : \n (cth nasi,daging,susu,burger,softdrink)');

switch( item ){
	case 'nasi':
	case 'daging' :
	case 'susu' :
	alert('Makanan Sehat');
	break;
	case 'burger' :
	case 'softdrink' :
	alert('Makanan Tidak Sehat');
	break;
	default :
	alert('Tidak Ada Di List');
}