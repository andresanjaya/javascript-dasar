// 1. forEach
//var nama = ['ayam','babi','cacing','domba'];
//nama.forEach(function(e, i){
//    console.log('Nama Hewan Ke-' + (i+1) + ' adalah : ' + e);
//})

// 2.Map
//var angka = [1,2,3,4,5,6,7,8];
//var angka2 = angka.map(function(e){
//    return e + 'gelas';
//})
//console.log(angka2.join(' - '));

// 3. Sort
var angka = [1,22,12,45,67,68,55,100,1000,88,2,9,99,43,45,66,11,222,999,9900099]
angka.sort(function(a,b){
    return a - b;
})
console.log(angka.join(' - '))