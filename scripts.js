var list = [];
var node;
var textnode;
var red;
var green;
var blue;


function handle(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        addThing();
    }
}

function switcheroo() {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    document.getElementById("blyat").style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    document.getElementById("trash").style.backgroundColor = "rgb(" + blue + "," + red + "," + green + ")";
    document.getElementById("addButton").style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    document.getElementById("Switch").style.backgroundColor = "rgb(" + blue + "," + red + "," + green + ")";
}

function del() {
    
    $(".checked").remove();
}

function addThing() {
    if (addItem.value != "") {
        list.push(document.getElementById("addItem").value);
        console.log(list);
        textnode = document.createTextNode(list[list.length - 1]);
        node = document.createElement("li");
        node.appendChild(textnode);
        document.getElementById("sortable").appendChild(node);
        document.getElementById("addItem").value = "";
        $("li").last().click(function () {
        $(this).toggleClass("checked");
        });
    } else {
        alert("Input cannot be empty!");
    }
}

$(function () {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
    $("#sortable").sortable("option", "axis", "y");
});

$(document).ready(function(){
    var boxHeight = $("#switch").height();
    var boxWidth =  $("#switch").width();
    $("#switch").mouseenter(function(){
        $(this).animate({
            height: boxHeight*1.2,
            width: boxWidth*1.2
        });
    }).mouseleave(function(){
        $(this).animate({
            height: boxHeight,
            width: boxWidth
        });
    });
});
