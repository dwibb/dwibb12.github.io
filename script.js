var menub = document.getElementsByClassName('menub')[0];
var menuc = document.getElementsByClassName('menuc')[0];

menub.onclick = function() {
    menuc.classList.toggle('active');
}