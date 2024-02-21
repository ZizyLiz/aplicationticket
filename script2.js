function myFunct2(){
    alert("Silahkan ambil tiket terlebih dahulu!");
    while(true){
        const nama = prompt("Masukkan Nama Anda");
        if (nama == "" || nama == null){
            alert("Nama tidak boleh kosong");
        } else {
            const umur = prompt("Masukkan Umur Anda");
            if (umur >= 13){
                alert(`Selamat datang ${nama}!`);
                const studio = prompt("Pilih studio yang akan dituju (A, B, C)").toUpperCase();
                if (studio == "A" || studio == "B" || studio == "C"){
                    alert(`Tiket ${nama}, Studio ${studio}, Umur ${umur}`)
                } else {
                    alert("Studio tidak tersedia");
                    break;
                }
            } else if (umur === "" || umur === null){
                alert("Tidak boleh masuk");
                break;
            } else if (umur < 13){
                alert("Maaf, Anda belum cukup umur untuk menonton");
                break;
            }
        }
    }
}