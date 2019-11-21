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

function addThing() {
    
    if (list.includes(addItem.value)) {
        alert("item already exists");    
    }else if (addItem.value != "") {
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
            height: boxHeight*1.3,
            width: boxWidth*1.3
        });
    }).mouseleave(function(){
        $(this).animate({
            height: "50",
            width: "120"
        });
    });
});

$(document).ready(function(){
    $("#delete").mouseenter(function(){
        $(this).animate({
            height: "50",
            width: "50"
        });
    }).mouseleave(function(){
        $(this).animate({
            height: "40",
            width: "40"
        });
    });
});

$(document).ready(function(){
    $("#addButton").mouseenter(function(){
        $(this).animate({
            height: "50",
            width: "150"
        });
    }).mouseleave(function(){
        $(this).animate({
            height: "40",
            width: "120"
        });
    });
});
