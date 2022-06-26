// class Mobil {
//     constructor(merek, warna, tahun){
//         this.merek = merek;
//         this.warna = warna;
//         this.tahun = tahun;
//     }
//     nyalakanMobil() {
//         console.log(`Mobil ${this.merek} dinyalakan.`);
//     }
// }

// const mobil1 = new Mobil("Toyota", "Hijau", "3050");
// mobil1.nyalakanMobil();

// //Inheritance 
// class Toyota extends Mobil {
//     constructor(merek, warna, tahun, mesin){
//         super(merek, warna, tahun);
//         this.mesin = mesin;
//     }
//     matikanMobil(){
//         console.log(`Mobil ${this.merek} dimatikan`);
//     }
// }



// const agya = new Toyota('Toyota Agya', 'Pink', '3060', '1500cc');
// agya.nyalakanMobil();
// agya.matikanMobil();


console.log("Halo2 Bandung");
console.log("Tidak Jadi Halo");

// //1.
class Orang {
    constructor(nama,umur){
        this.nama = nama;
        this.umur = umur;
    }
    bekerja(){
        return `${this.nama} sedang bekerja seperti biasa`;
    }
}

const user1 = new Orang("Gerald", 35);
console.log(user1.bekerja());

//2.
class Orang1
{
    constructor(nama, umur)
    {
       this.nama = nama;
       this.umur = umur;
    }
    tidur(){
        return `${this.nama} sedang tidur`;
    }
    makan(){
        return `${this.nama} sedang makan`;
    }
}

class Pelajar extends Orang1{
    constructor(nama,umur,namasekolah)
    {
       super(nama,umur);
       this.namasekolah = namasekolah;
    }
    belajar()
    {
        return `${this.nama} belajar di ${this.namaSekolah}`
    }
}
const user = new Pelajar("John", 17, "Unklab");
console.log(user);
