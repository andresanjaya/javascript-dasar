function jumlahLuasDuaBuahSegitiga(a, b, t1, t2) {
    var luasA;
    var luasB;
    var total;

    luasA = a * t1 /2;
    luasB = b * t2 /2;

    total = luasA + luasB;
    
    return total;
}
console.log(jumlahLuasDuaBuahSegitiga(5, 10, 6, 8));