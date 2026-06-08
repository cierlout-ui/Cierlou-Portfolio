const overlay = document.getElementById("overlay");

function showPopup(title, image, text){
    document.getElementById("popupText").innerHTML = text;

    overlay.style.display = "flex";
}

function closePopup(){
    overlay.style.display = "none";
}

overlay.addEventListener("click", function(e){
    if(e.target === overlay){
        closePopup();
    }
});