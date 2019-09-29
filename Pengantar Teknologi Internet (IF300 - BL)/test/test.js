function addSomething() {
    let body = document.getElementById("test").querySelector("p");

    let newNode = '<p> anjing' + Math.random() + '</p>'

    body.innerHTML += newNode;
}