function createButton() {
    var btn = document.createElement("BUTTON");
    document.body.appendChild(btn);
}

function addText() {
    var t = document.createTextNode("Tekst stworzony przy użyciu createTextNode");      
    document.body.appendChild(t);
}

function addBefore(){
    var newItem = document.createElement("LI");
    var textNode = document.createTextNode("Nowy element");
    newItem.appendChild(textNode);
    
    var list = document.getElementById("lista");
    list.insertBefore(newItem, list.childNodes[0]);
}

function replace(){
    var newItem = document.createElement("LI");
    var textNode = document.createTextNode("zamieniony element");
    newItem.appendChild(textNode);
    var list = document.getElementById("lista");
    list.replaceChild(newItem, list.lastElementChild);
}

function remove(){
    var list = document.getElementById("lista");
    list.removeChild(list.lastElementChild);
}

function getParentNode(){
    var x = document.getElementById("elem").parentNode.nodeName;
    document.getElementById("wynik").innerHTML = x;
}