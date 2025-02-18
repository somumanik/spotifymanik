let showMegaMenu = document.querySelector(".header_mid_right_navleftMobile");
let triplicon = document.querySelector(".tripleicon");

triplicon.addEventListener("click",()=>
{
    // alert("ok");
    showMegaMenu.classList.toggle("showMegaMenu")
    triplicon.classList.toggle("fa-xmark")
})


