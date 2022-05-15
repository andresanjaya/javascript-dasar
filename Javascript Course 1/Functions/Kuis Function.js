const minimal = (a, b) => {
    if (a < b){
        return a;
    }else if (b < a){
        return b;
    }else if (a === b){
        return a;
    }
}
console.log(minimal(1, 4));
console.log(minimal(3, 2));
console.log(minimal(3, 3));


const power = (a,b) => {
    return a ** b;
}
console.log(power(7, 3));
console.log(power(3, 3));
console.log(power(4, 0.5));


