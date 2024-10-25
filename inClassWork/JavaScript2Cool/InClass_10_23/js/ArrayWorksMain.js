let myList = [];

function addItem(){
    let item = document.getElementById("item").value;
    if ( item == null || item === ""){
        alert("Please enter a valid item");
    } else
        myList.push(item);
    showList()
}
function removeFromList(){
    let item = document.getElementById("item").value;
    let idx = ( myList.indexOf(item));
    if (idx !== -1){
        myList.splice(idx, 1);
    }
    showList();

}
function showList(){
    let oStr = "<h2> Operation results</h2>"
    oStr += "<ol>";
    for (let i = 0; i < myList.length; i++){
        oStr += `<li>${myList[i]}</li>`;
    }
    oStr += "</ol>";
    document.getElementById("results").innerHTML = oStr;
}