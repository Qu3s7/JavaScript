// manipulasi array//

// var arr = [];
// arr[0]= "nama";
// arr[1]= "2";
// arr[2]= "3";

// console.log(arr);

//menghapus array

// var arr= ["1","2","3"];
// arr[1] = undefined;

// console.log(arr);

//menampilkan array

// var arr= ["1","2","3"];

// for( var i = 0; i<arr.length; i++){
// 	console.log(arr[i]);
// }

//method
//1.join
// var  arr = ['1','2','3'];
// console.log(arr.join(' '));

//2.push,pop
// arr.push('4','5');
// arr.pop();
// console.log(arr.join(" "));

//3.unshift,shift
// arr.unshift('0');
// arr.shift();
// console.log(arr.join(" "));
// var  arr = ['1','2','3'];
//4.splice
//splice(indexAwal,Maudihapusbrp,elemenbaru,elemenbaru2);
// arr.splice(1, 2,'halo');
// console.log(arr.join(' '));

//5.slice
//slice(awal,Akhir);
// var  arr = ['1','2','3','4','5'];
// var arr2 = arr.slice(1,3);

// console.log(arr2.join(' '));

//6.foreach
// var nama = ['haris','doddy','mawar']
// var  angka = ['1','2','3','4','5','6','7','8'];
// for( var i = 0; i < angka.length; i++);{
// 	console.log(angka[i]);
// }

// angka.forEach(function(e){
// 	console.log(e);
// })
// nama.forEach(function(e,i){
// 	console.log('Mahasiswa ke ' + (i+1)+ 'adalah :' + e);
// })

//7.map
// var  angka = ['1','2','3','4','5','6','7','8'];
// var angka2 = angka.map(function(e){
// 	return e * 2;
// })
// console.log(angka2.join(' '));

//8.sort
var  angka = [1,4,5,7,6,8,2,];
console.log(angka.join( ));
angka.sort();
console.log(angka.join( ));