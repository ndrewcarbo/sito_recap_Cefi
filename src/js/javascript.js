let headerTag = document.getElementById("main-header");
let buttonTornaSu = document.getElementById("torna-su");
let buttonChat = document.getElementById("whatsup");


document.addEventListener("scroll", gestisciScroll);
buttonTornaSu.addEventListener("click", gestisciTornaSU);

function gestisciTornaSU(event){
    event.preventDefault();
    scrollTo({
        top:0,
        left:0,
        behavior: "smooth",
    });
}

function gestisciTasti(){

}





function gestisciScroll(){
    let quantitaScroll;
    quantitaScroll = window.scrollY || window.pageYOffset || document.documetElement.scrollTop || document.body.scrollTop;
    
    if(quantitaScroll>300){
        headerTag.style.padding="30px 50px";
        buttonTornaSu.style.opacity="1";

        buttonChat.style.bottom="80px";
        buttonChat.style.opacity="1";
    }
    else{
        headerTag.style.padding="50px";
        buttonTornaSu.style.opacity="0";

        buttonChat.style.opacity="0";
        buttonChat.style.bottom="15px";
    }
}

