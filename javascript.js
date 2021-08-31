let bar = document.getElementById("bar");
let cross = document.getElementById("cross");
let resnav = document.getElementById("resnav");
let body = document.getElementById("bd");


function barfun(){
    resnav.style.left = "0px";
    bar.style.transition = "fade";
    bar.style.display = "none";
    cross.style.display = "block";
     body.classList.add("scrolling");

}

function crossfun(){
    resnav.style.left = "-300px";
    bar.style.display = "block";
    cross.style.display = "none";
     body.classList.remove("scrolling");

}




