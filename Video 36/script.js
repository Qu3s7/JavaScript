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
var  arr = ['1','2','3'];
//4.splice
//splice(indexAwal,Maudihapusbrp,elemenbaru,elemenbaru2);
// arr.splice(1, 2,'halo');
// console.log(arr.join(' '));

//5.slice
//slice(awal,Akhir);
var  arr = ['1','2','3','4','5'];
var arr2 = arr.slice(1,3);

console.log(arr2.join(' '));