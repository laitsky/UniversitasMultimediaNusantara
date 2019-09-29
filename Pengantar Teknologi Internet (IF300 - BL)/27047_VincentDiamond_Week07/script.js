function loginFunc() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
 
    if (username.value == '' || password.value == '') {
        window.alert("Username and Password cannot be NULL");
    }
    else if(username.value == "27047" && password.value == "pti2019") {
        window.location.replace("random_undian.html");
    }
    else {
        window.alert("Wrong username or password");
        document.location.reload(true);
    }
}