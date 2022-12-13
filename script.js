
window.onload = function(){
    var navFull=document.getElementById('navFull');
    var srchBtn=document.getElementById('srchBtn');
    var navClose=document.getElementById('navClose');
srchBtn.onclick=function(){
    navFull.style.display="none";
}
navClose.onclick=function(){
    navFull.style.display="flex";
}
};
