function generateUserTable(data) {
    let idx = 0;
    let tbody = document.getElementById('users').querySelector('tbody');
    tbody.innerHTML = '';
    for (idx = 0; idx < data.length; idx++) { //membuat row ke table html sebanyak jumlah data yang diperoleh
        let colID = '<td>' + data[idx].id + '</td>' //membuat kolom ID
        let colName = '<td>' + data[idx].name + '</td>' //membuat kolom nama
        let colEmail = '<td>' + data[idx].email + '</td>' //membuat kolom email
        let colCompanyName = '<td>' + data[idx].company.name + '</td>' //membuat kolom nama perusahaan
        let btnShowPost = '<td><button class="button-posts" userId=' + data[idx].id +
            ' onclick="loadPosts(' + data[idx].id + ')">Show Posts</button></td>'; //membuat tombol untuk menampilkan post user
        //membuat row sejumlah kolom yang ingin ditampilkan
        let newRow = '<tr>' + colID + colName + colEmail + colCompanyName + btnShowPost + '</tr>';
        tbody.innerHTML += newRow; //meng-append row ke dalam tbody                    
    }
}

function loadUserData() {
    let request = new XMLHttpRequest(); //membuat objek XMLHttpRequest
    let url = 'https://jsonplaceholder.typicode.com/users'; //URL berisi data users berbentuk JSON
    request.open('GET', url, true); //Open request dengan method GET ke server secara asinkron

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) { //memastikan status request "OK"
            //mem-parse data menjadi Javascript objek dan ditampung ke variabel dengan nama 'data'
            let data = JSON.parse(request.responseText);
            generateUserTable(data);
            //console.log(data); //menampilkan data yang didapat
        } else {
            alert('Page Not Found');
        }
    }
    request.onerror = () => {
        alert('Request Failed! Check your internet connection');
    }
    request.send(); //mengirim request ke server
}

function onDocumentFinish() {
    loadUserData();
}

function showPosts(data) {
    let idx = 0;
    let tbody = document.getElementById('user-posts').querySelector('tbody');
    tbody.innerHTML = '';
    for (idx = 0; idx < data.length; idx++) { //membuat row ke table html sebanyak jumlah data yang diperoleh
        let colID = '<td>' + data[idx].id + '</td>'
        let colTitle = '<td>' + data[idx].title + '</td>'
        let colBody = '<td>' + data[idx].body + '</td>'
        let btnShowComments = '<td><button class="button-comments" postId=' + data[idx].id +
            ' onclick="loadComments(' + data[idx].id + ')">Show Comments</button></td>'; //membuat tombol untuk menampilkan post user
        //membuat row sejumlah kolom yang ingin ditampilkan
        let newRow = '<tr>' + colID + colTitle + colBody + btnShowComments + '</tr>';
        tbody.innerHTML += newRow; //meng-append row ke dalam tbody                    
    }
}

function loadPosts(id) {
    let request = new XMLHttpRequest(); //membuat objek XMLHttpRequest
    let url = 'https://jsonplaceholder.typicode.com/posts/?userId=' + id; //URL berisi data users berbentuk JSON
    request.open('GET', url, true); //Open request dengan method GET ke server secara asinkron

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);
            showPosts(data);
        } else {
            alert('Page Not Found');
        }
    }
    request.onerror = () => {
        alert('Request Failed! Check your internet connection');
    }
    request.send(); //mengirim request ke server
}