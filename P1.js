lass mhs = {                 // Definisi Class mhs
  constructor(att1, att2) { ... }  // Konstruktor untuk inisialisasi awal atribut
  mtd(att3) {                  // Method di dalam kelas
    console.log(att3);
  }
}

obj = new mhs("Saya");         // Instansiasi objek baru dari kelas mhs
obj.mtd("Saya");               // Pemanggilan method pada objek
