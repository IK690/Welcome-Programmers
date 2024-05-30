var popup= document.getElementById("popup");

var closeBtn= document.getElementById("closepopup");

var openBtn= document.getElementById("openpopup");

openBtn.onclick= function() {
    popup.style.display="block";
}
//when a user clicks on the close button it will close//
closeBtn.onclick=function() {
    popup.style.display="none";
}
//when  the use clicks anywhere the popup will close//
window.onclick= function(event){
    if (event.target== popup) {
        popup.style.display="none"
    }
}