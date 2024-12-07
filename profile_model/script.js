const modal = document.querySelector(".modal") ;
const overlay = document.querySelector(".overlay") ;

const openmodal= () => {
    console.log('modal is open');
    modal.classList.add("active") ;
    overlay.classList.add("overlayactive") ;
};

const closemodal= () => {
    modal.classList.remove("active") ;
    overlay.classList.remove("overlayactive") ;
};



let twitter = document.querySelector("#twitter");
twitter.addEventListener('click' , function(){
    alert("This user does not have any twitter account") ;
}) ;
let Whatsapp = document.querySelector("#Whatsapp");
Whatsapp.addEventListener('click' , function(){
    alert("whatsapp no. 9142919799") ;
}) ;

