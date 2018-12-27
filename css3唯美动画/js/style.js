
var qie = document.getElementById('list').getElementsByTagName('img');
var img = document.getElementById('qie-1');
for (var i = 0; i < qie.length; i++) {
    qie[i].onmouseover = function () {
        img.src = this.src;
    };
    img[i].onmouseout = function () {

    }
}
