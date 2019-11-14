var list = [];
var node;
var textnode; 


function handle(e){
        if(e.keyCode === 13){
            e.preventDefault();
            addThing();
        }
    }


function addThing() {
    list.push(toDoList.ListItem.value);
    console.log(list);
    textnode = document.createTextNode(list[list.length-1]);
    node = document.createElement("LI");
    node.appendChild(textnode);
    document.getElementById("sortable").appendChild(node);
}

$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
    $( "#sortable" ).sortable( "option", "axis", "y" );
  } );