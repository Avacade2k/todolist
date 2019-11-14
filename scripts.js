var list = [];

function handle(e){
        if(e.keyCode === 13){
            e.preventDefault();
            addThing();
            alert("Enter was pressed");
        }
    }










function addThing() {
    list.push(toDoList.ListItem.value);
    console.log(list);
    var node = document.createElement("LI");
    var textnode = document.createTextNode(list[list.length-1]);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
}

    
$( ".draggable" ).draggable({
    grid: [ 50, 20 ]
});