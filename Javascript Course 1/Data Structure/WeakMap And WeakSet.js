let visitsCountMap = new WeakMap(); // Menyimpan daftar user

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let andre = { name: "andre" };
countUser(andre);                // Menambahkan user "Jonas"

andre = null;                    // Data object "Jonas" dihapus

console.log(visitsCountMap);

/* output
WeakMap { <items unknown> }
*/