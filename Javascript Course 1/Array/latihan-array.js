var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
    // Jika Angkot Kosong
    if (penumpang.length == 0) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // Kembalikan isi array & keluar dari function
        return penumpang;
    } else {
        // Telusuri seluruh kuris dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // Jika ada kursi kosong
            if (penumpang[i] == undefined) {
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                //kembalikan isi array & keluar dari function
                return penumpang;
            }
            // Jika sudah ada nama yang sama
            else if (penumpang[i] == namaPenumpang) {
                // Tampilkan pesan kesalahannya
                console.log(namaPenumpang + ' sudah ada di dalam angkot')
                // Kembalikan isi array & keluar dari function
                return penumpang;
            }
            // Jika seluruh kursi terisi
            else if (i == penumpang.length - 1) {
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikanisi array & keluar dari function
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        console.log('Angkot masih kosong');
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            } else if (i == penumpang.length - 1) {
                console.log(namaPenumpang + ' Tidak ada di dalam angkot')
                return penumpang;
            }
        }
    }
}