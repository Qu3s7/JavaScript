//objek literal
var siswa = {
	nama : "Haris",
	NIS : "1935351",
	email : "wimardin.haris@gmail.com",
	jurusan : "RPL"
}

var siswa1 = {
	nama : "Doddy",
	NIS : "1933521",
	email : "doddy@gmail.com",
	jurusan : "RPL"
}

//fucntion declaartion
function buatObjekSiswa(nama,NIS,email,jurusan){
	var siswa = {};
	siswa.nama = nama;
	siswa.NIS = NIS;
	siswa.email = email;
	siswa.jurusan = jurusan;
	return siswa;
}

var siswa2 = buatObjekSiswa('gailih','3456787885','haohdhoaho@yahoo.com','TKJ');

//consturctor
function Siswa(nama,NIS,email,jurusan) {
	this.nama = nama;
	this.NIS = NIS;
	this.email = email;
	this.jurusan = jurusan;
}

var siswa3 = new Siswa('Erik','23456789','Erik.cloud.com','Animasi')