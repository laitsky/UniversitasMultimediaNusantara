function loginFunc() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
 
    if (username.value == '' || password.value == '') {
        window.alert("Username and Password cannot be NULL");
    }
    else if(username.value == "00000027047" && password.value == "pti2019") {
        window.location.replace("random_undian.html");
    }
    else {
        window.alert("Wrong username or password");
        document.location.reload(true);
    }
}

function randomizeNumber() {
    var inputBox = document.getElementById("angka-undian");
    inputBox.value = Math.floor(Math.random() * Math.floor(100));
}

function submitInfo() {
    var namaAnggota = document.getElementById("nama-anggota");
    var inputBox = document.getElementById("angka-undian");
    var descBox = document.getElementById("deskripsi-undian");

    
}