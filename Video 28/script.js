function jumlahvolumekubus(a, b) {
	var volumeA;
	var volumeB;
	var total;

	volumeA = a * a * a;
	volumeB = b * b * b;

	total = volumeA + volumeB;

	return total

}

console.log(jumlahvolumekubus(8, 3));
console.log(jumlahvolumekubus(10, 15));