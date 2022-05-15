const isRaining = true;

console.log("Persiapan sebelum berangkat kegiatan.");
if (isRaining) {
    console.log("Hari ini hujan. Bawa payung.");
}
console.log("Berangkat kegiatan.");

/*---------------------if else------------------------ */
let x = 50;

if(x > 70) {
    console.log(x);
} else {
    console.log("Nilai kurang dari 70");
}



/*---------------------if else if------------------------ */

let language = "French";
let greeting = "Selamat Pagi"

if(language === "English") {
    greeting = "Good Morning!";
} else if(language === "French") {
    greeting = "Bonjour!"
} else if(language === "Japanese") {
    greeting = "Ohayou Gozaimasu!"
}

console.log(greeting);


// -----------------ternary operator atau conditional expressions ----------------//
// condition ? true expression : false expression
const isMember = true;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`)

