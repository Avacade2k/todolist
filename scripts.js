var list = [];
var node;
var textnode;
var red;
var green;
var blue;
var compList = [];


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
    $('.checked').each(function(){
        compList.push($(this).text());
    });
    $(".checked").remove();
        list = $(list).not(compList).get();
        console.log(list);
        compList = [];
}

function same() { 
    //$(list).each(function() {
        console.log("not same, same func");
        if ($("#addItem").text() === "abc") {
            return true;
            alert("lool")
        }
        console.log("not same, same func");
    //});
}

function addThing() {
    
    if (same()) {
        alert("item already exists");    
    } else if (addItem.value != "") {
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
