var menub = document.getElementsByClassName('menub')[0];
var menuc = document.getElementsByClassName('menuc')[0];
var call = document.getElementsByClassName('call')[0];
var contcall = document.getElementsByClassName('contcall')[0];

menub.onclick = function() {
    menuc.classList.toggle('active');
}
contcall.onclick = function() {
    call.classList.toggle('callactive');
}