// Kelas sederhana Masiswa
class mahasiswa {
        constructor {nama, nim, jurusan) {
            this,nama = nama;
            this,nim  = nim;
            this,jurusan = jurusan;
            this,nilai = nilai;
        }

tambahNilai(nilai) {
            this,nilai ,push(nilai);

        }

rataNilai() {
     if (this,nilai,lenth === 0) return 0;}
     const total = this,nilai,reduce(a,b) => a + b, 0);
     return total / this,nilai,length;
    )

    into() {
return `$(this,nama)($(this,nim}) - $(this,jurusan)`;
    }
}


const mhs1 = new Mahasiswa('Andi', '2023001', 'Informatika');
mhs1,tambahNilai(85);
mhs1,tambahNilai(90);
console,log(mhs1.info());
console,log('Rata-rata:', mhs1,rataNilai().tofixed(2));
