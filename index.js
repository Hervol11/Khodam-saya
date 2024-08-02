let namaInput = document.getElementById('namaInput')
let khodam = document.getElementById('khodam')
let khodam1 = "✨jus buah✨";
let khodam2 = "✨becak rusak✨";
let khodam3 = "✨ketoprak 🤤✨";
let khodam4 = "✨sesosok hitam✨";
let khodam5 = "✨anggrek mekar pontianak✨";
let khodam6 = "✨ikan lele✨";
let khodam7 = "✨kulkas lg 2 pintu✨";
let khodam8 = "✨mangkok bakso✨";
let khodam9 = "✨hiu terbang✨";
let khodam10 = "✨harimau obesitas✨";


function cekKhodam(){
    let nama = namaInput.value
    localStorage.setItem("nama", nama)
    let klik;
    
    if (localStorage.getItem(nama)) {
        klik = parseInt(localStorage.getItem(nama), 10);
    } else {
        klik = Math.floor(Math.random() * 10) + 1;
        localStorage.setItem(nama, klik);
    }


    console.log(klik)

    if(klik == 1){khodam.textContent = khodam1}
    if(klik == 2){khodam.textContent = khodam2}
    if(klik == 3){khodam.textContent = khodam3}
    if(klik == 4){khodam.textContent = khodam4}
    if(klik == 5){khodam.textContent = khodam5}
    if(klik == 6){khodam.textContent = khodam6}
    if(klik == 7){khodam.textContent = khodam7}
    if(klik == 8){khodam.textContent = khodam8}
    if(klik == 9){khodam.textContent = khodam9}
    if(klik == 10){khodam.textContent = khodam10}

    
}