let menues=document.getElementById("menu-container");

function showMenu(){
   menues.style.right="0";

}
function hideMenu(){
    menues.style.right="-200px";
}
// Right Click Event
function preventRightClick(event){
    if(event.button==2){
        alert("You can not do right click here!");
        return false;
    }
}