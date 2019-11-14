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
}

/*for () {
    
}

*/
    
$( ".draggable" ).draggable({
    grid: [ 50, 20 ]
});