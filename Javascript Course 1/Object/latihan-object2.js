function Gocar1 (sopir, destinasi, penumpang, uang) {
    this.sopir = sopir;
    this.destinasi = destinasi;
    this.penumpang = penumpang;
    this.uang = uang;

    this.penumpangNaik = function (namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function (namaPenumpang, bayar) {
        if (this.penumpang.length === 0) {
            alert('Mobil Masih Kosong');
            return false;
        }

        for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.uang += bayar;
                return this.penumpang;
            }
        }
    }


}
var gocar1 = new Gocar1 ('Andre Sanjaya', ['Denpasar', 'Badung'], [], 0);