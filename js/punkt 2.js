function printURLs(){
    var x = document.images;
    var txt = "";
    var i;
    for (i = 0; i < x.length; i++) {
        txt = txt +  x[i].src + "<br>";
    }
    document.getElementById("wynik").innerHTML = txt;
}

function countLinks(){
    var x = document.links.length;
    document.getElementById("wynik").innerHTML = x;
}

function getID(){
    var x = document.forms.item(0).id;
    document.getElementById("wynik").innerHTML = x;
}

function getAnchors() {
    var x = document.anchors.namedItem("2");
    x.style.backgroundColor = "red";
}
