const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(capital.size);
console.log(capital.get("London"));
console.log(capital.get("Jakarta"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));