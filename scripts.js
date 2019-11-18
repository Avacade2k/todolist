var list = [];
var node;
var textnode; 
var red;
var green;
var blue;


function handle(e){
        if(e.keyCode === 13){
            e.preventDefault();
            addThing();
        }
    }

function switcheroo() {
    red = Math.floor(Math.random()*256);
    green = Math.floor(Math.random()*256);
    blue = Math.floor(Math.random()*256);
    document.getElementById("blyat").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("trash").style.backgroundColor = "rgb("+blue+","+red+","+green+")";
    document.getElementById("addButton").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("Switch").style.backgroundColor = "rgb("+blue+","+red+","+green+")";
    }

function del() {
    $(".checked").remove();
}

function addThing() {
    if(addItem.value != ""){
        list.push(document.getElementById("addItem").value);
        console.log(list);
        textnode = document.createTextNode(list[list.length-1]);
        node = document.createElement("LI");
        node.appendChild(textnode);
        document.getElementById("sortable").appendChild(node);
        document.getElementById("addItem").value = "";
       }
    else{
        alert("Input cannot be empty!");
    }
}

$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
    $( "#sortable" ).sortable( "option", "axis", "y" );
  } );