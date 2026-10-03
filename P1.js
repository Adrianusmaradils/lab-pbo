class mhs {
  // 1. Deklarasi constructor tanpa titik-titik (...)
  constructor(att1, att2) {
    this.att1 = att1;
    this.att2 = att2;
  }

  // 2. Method di dalam kelas
  mtd(att3) {
    console.log(att3);
  }
}

// 3. Instansiasi objek baru dengan keyword let/const dan argumen yang sesuai
const obj = new mhs("Saya", "Atribut 2");

// 4. Pemanggilan method
obj.mtd("Saya");
