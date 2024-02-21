function myFunct(){
    alert("Silahkan ambil tiket terlebih dahulu!");
    const nama = prompt("Masukkan Nama Anda");
    if (nama == "" || nama == null){
        alert("Nama tidak boleh kosong!");
        return;
    }
    const umur = prompt("Masukkan Umur Anda");
    if (umur >= 13){
        alert(`Selamat datang ${nama}!`);
        const studio = prompt("Pilih studio yang akan dituju (A, B, C)").toUpperCase();
        if (studio == "A"){
            alert(`Tiket ${nama}, Studio A, Umur ${umur}`)
        } 
        else if (studio == "B"){
            alert(`Tiket ${nama}, Studio B, Umur ${umur}`)
        } else if(studio == "C"){
            alert(`Tiket ${nama}, Studio C, Umur ${umur}`)
        } else {
            alert("Studio tidak tersedia 🤬");
        }
    } else if (umur < 13){
        alert("Maaf, Anda belum cukup umur untuk menonton");
    }
}