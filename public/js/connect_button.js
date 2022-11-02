const connectButton = document.getElementById('connectButton');
const url = connectButton.getAttribute('url');
console.log(url)
function connectWithHandCash() {
    location.href = url;
}

console.log(connectButton);

connectButton.addEventListener('click', connectWithHandCash, false);