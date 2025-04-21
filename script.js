const popup = document.getElementById("pop-up");

function openPopup(event){
    event.preventDefault(); 
    popup.classList. add("open-popup");

    document.getElementById("contact-form").reset();
}

function closePopup(){
    popup.classList.remove('open-popup');
}