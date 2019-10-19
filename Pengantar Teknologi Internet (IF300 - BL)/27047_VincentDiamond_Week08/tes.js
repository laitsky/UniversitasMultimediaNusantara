function XHRPostMethod() {
    let xhr = new XMLHttpRequest();
    let url = 'www.budi.com/info-diri';
    xhr.open('POST', url, true);
    xhr.send(JSON.stringify({
        nama: 'Budi',
        alamat: 'Jl. Merpati',
        pekerjaan: 'Programmer'
    }));
}