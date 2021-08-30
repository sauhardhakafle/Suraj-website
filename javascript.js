let bar = document.getElementById("bar");
let cross = document.getElementById("cross");
let resnav = document.getElementById("resnav");


function barfun(){
    resnav.style.left = "0px";
    bar.style.transition = "fade";
    bar.style.display = "none";
    cross.style.display = "block";

}

function crossfun(){
    resnav.style.left = "-300px";
    bar.style.display = "block";
    cross.style.display = "none";

}

window.addEventListener('scroll' , function(){
    if(window.pageYOffset > 297){
        crossfun();
    } 
});



