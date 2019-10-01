function loginFunc() {
    event.preventDefault();

    let username = document.getElementById("username");
    let password = document.getElementById("password");
 
    if (username.value == '' || password.value == '') {
        window.alert("Username and Password cannot be NULL");
    }
    else if(username.value == "00000027047" && password.value == "pti2019") {
        window.location.href = "random_undian.html"
    }
    else {
        window.alert("Wrong username or password");
        document.location.reload(true);
    }
}

function randomizeNumber() {
    let inputBox = document.getElementById("angka-undian");
    inputBox.value = Math.floor(Math.random() * Math.floor(100));
}

function submitInfo() {
    let namaAnggota = document.getElementById("nama-anggota");
    let numberBox = document.getElementById("angka-undian");
    let descBox = document.getElementById("deskripsi-undian");
    let secondColumn = document.getElementById("column-2").querySelector("p");

    let appendNamaAnggota = '<p>Nama anggota: ' + namaAnggota.value + '</p>';
    let appendAngka = '<p>Angka random yang didapat: ' + numberBox.value + '</p>';
    let appendDeskripsi = '<p>Deskripsi undian: ' + descBox.value + '</p>';
    let appendAll = '<div class="borderBox">' + appendNamaAnggota + appendAngka + appendDeskripsi + '</div><br/>';
    
    secondColumn.innerHTML += appendAll;

    namaAnggota.value = '';
    numberBox.value = '';
    descBox.value = '';
}