//----------------------------------------------------------------------------------------------------------------------

let img0=document.getElementById('img0');
let i=0
function nextSlide2(){
    i -=400;
    img0.style.marginLeft=i+"px";
}
function previousSlide2(){
    i+=400;
    img0.style.marginLeft=i+"px";

}