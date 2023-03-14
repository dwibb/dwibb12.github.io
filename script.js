var menub = document.getElementsByClassName('menub');
var menuc = document.getElementsByClassName('menuc');

menub.onclick = function () {
    menuc.classlist.toggle('active');
}