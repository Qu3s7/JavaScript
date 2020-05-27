//this
// var a = 10;
// console.log(this.a);

// cara 1 function declaration

// function halo(){
// 	console.log(this);
// 	console.log('halo');
// }
// this.halo();
//this = objek global/window

// object literal

// var obj = {a : 10, nama : 'Haris'};
// obj.halo = function(){
// 	console.log(this);
// 	console.log('halo');
// }
// obj.halo();
//this mengembalikan objek



//constructor function

function Halo(){
	console.log(this);
	console.log('Halo')
}
var obj2 = new Halo();
var obj3 = new Halo();
//this mengembalikan objek yng baru dibuat