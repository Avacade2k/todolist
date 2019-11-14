var list = [];



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