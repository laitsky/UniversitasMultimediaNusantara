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
    let cardContainer = document.getElementById('card-container').querySelector('p');
    cardContainer.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        let cardTitle = '<h3>TITLE: ' + data[i].title + '</h3>';
        let cardBody = '<p><em>' + data[i].body + '</em><p>'
        let btnShowComments = '<td><button class="button-comments" postId=' + data[i].id +
            ' onclick="loadComments(' + data[i].id + ')">Show Comments</button></td>';
        let newCard = '<div id="card-container" class="child-card-container">' + cardTitle +
            cardBody + btnShowComments + '<div id="show-comments"><p></p></div></div>';
        cardContainer.innerHTML += newCard;
    }
}

function loadPosts(id) {
    let request = new XMLHttpRequest();
    let url = 'https://jsonplaceholder.typicode.com/posts/?userId=' + id;
    request.open('GET', url, true);

    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);
            showPosts(data)
        } else {
            window.alert('Page Not Found');
        }
    }
    request.onerror = () => {
        window.alert('Request failed! Check your internet connection');
    }
    request.send();
}

function showComments(data) {
    let commentContainer = document.getElementById("show-comments");
    commentContainer.innerHTML = '<h2>Comments</h2>';
    for (let i = 0; i < data.length; i++) {
        let commentPoster = data[i].name + ' ' + data[i].email;
        let commentBody = data[i].body;
        let newComment = '<p><strong>' + commentPoster + '</strong><em> commented: "' + commentBody + '</em></p>';
        commentContainer.innerHTML += newComment;
    }
}

function loadComments(id) {
    let request = new XMLHttpRequest();
    let url = 'https://jsonplaceholder.typicode.com/posts/1/comments/?postId=' + id;
    request.open('GET', url, true);

    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);
            showComments(data);
        } else {
            window.alert('Comment Not Found!');
        }
    }
    request.onerror = () => {
        window.alert('Request failed! Check your internet connection');
    }
    request.send();
}