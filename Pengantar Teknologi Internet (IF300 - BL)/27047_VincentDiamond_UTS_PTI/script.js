//Fungsi soal 1
function generateQuote() {
    let inputQuotes = document.getElementById('quoteContent');
    let writer = document.getElementById('writer');

    let showQuotes = document.getElementById('showQuotes').querySelector('p');
    let appendInput = '<p>"' + inputQuotes.value + '"</p>';
    let appendWriter = '<p><em>- <strong>' + writer.value + '</em></strong></p><br><br>';
    let appendAll = '<div class="borderBox">' + appendInput + appendWriter;

    showQuotes.innerHTML += appendAll;

    inputQuotes.value = '';
    writer.value = '';
}

// Fungsi soal 2
function calculate() {
    let firstInput = document.getElementById('firstInput');
    let secondInput = document.getElementById('secondInput');
    let output = document.getElementById('output')
    let sign = document.getElementById('operatorSelect');

    if(sign.value == "plus") {
        output.value = Number(firstInput.value) + Number(secondInput.value);
    } else if(sign.value == "subs") {
        output.value = Number(firstInput.value) - Number(secondInput.value);
    } else if(sign.value == "divide") {
        output.value = Number(firstInput.value) / Number(secondInput.value);
    } else {
        output.value = Number(firstInput.value) * Number(secondInput.value);
    }
}

// Fungsi soal 3
function welcomeAlert() {
    window.alert("Welcome Vincent Diamond - 00000027047");
}

let maxCounter = 2;
function loginFunc() {
    event.preventDefault();

    let username = document.getElementById('username');
    let password = document.getElementById('password');
    if(maxCounter == 0) {
        username.disabled = true;
        password.disabled = true;
    }
    if(username.value = "uts_2019" && password.value == "pti2019") {
        window.alert("Login successfully");
        window.location.href = "soal3_home.html";
    }
    else {
        maxCounter--;
        window.alert("You have left " + (maxCounter + 1) + " attempt");
        username.value = ''; password.value = '';
    }

}
function generateNewColor() {
    let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    let bodyBackground = document.getElementById('backgroundHex');
    let showHex = document.getElementById('hexNumber');
    showHex.innerHTML = randomColor;
    let setBackground = "background-color:" + randomColor + ";"
    bodyBackground.setAttribute("style", setBackground);
}
function logout() {
    window.location.href = soal3_login.html;
}
