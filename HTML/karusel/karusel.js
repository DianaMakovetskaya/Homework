//----------------------------------------------------------------------------------------------------------------------

let img0=document.getElementById('img0');
let i=0
function nextSlide(){
    if(i==-1500){return }
    i -=500;
    img0.style.marginLeft=i+"px";
}
function previousSlide(){
    if(i==0){return }
    i+=500;
    img0.style.marginLeft=i+"px";

}

let imageArray=document.getElementsByClassName('image-item');
let position=0;
const imgSize = 500;
const countImg = imageArray.length;
const allSize = imgSize * (countImg - 3)
function nextSlide2(){
    if(Math.abs(position)<allSize){
        position -=imgSize*3;
        imageArray[0].style.marginLeft=position+"px";
        document.getElementsByClassName('dot2')[0].style.color="white"
        document.getElementsByClassName('dot1')[0].style.color="gray"

    }
}
function previousSlide2(){
    if(position){
        document.getElementsByClassName('dot2')[0].style.color="gray"
        document.getElementsByClassName('dot1')[0].style.color="white"

        position +=imgSize*3;
        imageArray[0].style.marginLeft=position+"px";
    }
}


//----------------------------------------------------------------------------------------------------------------------
let images=["https://i.picsum.photos/id/1/367/267.jpg?hmac=jZdc5TviQPVhxLyvyU8siO-I5FMVXVZpBhsBYKbBJpM",
    "https://i.picsum.photos/id/10/367/267.jpg?hmac=XRdepQX9y39tepelazZaEAxb6SbCWtual9_w28FPb6U",
    "https://i.picsum.photos/id/100/367/267.jpg?hmac=mNdSdA1Zh6w4qessdp5n207IFw3q_8FbbQ1gIr0jYBs",
    "https://i.picsum.photos/id/1000/367/267.jpg?hmac=uO9iQNujyGpqk0Ieytv_xfwbpy3ENW4PhnIZ1gsnldI",
    "https://i.picsum.photos/id/1003/367/267.jpg?hmac=1VHS13exKZ5QWJdtDTu0iCUTBZKCE_clSpR-wc3PW3g",
    "https://i.picsum.photos/id/1004/367/267.jpg?hmac=dNFSbCRe8enn3ikNS0FvmnagW4IzORvJuuTAJ_UUGf8"]
let img1=document.getElementsByClassName('item1')[0];
let img2=document.getElementsByClassName('item2')[0];
let img3=document.getElementsByClassName('item3')[0];
img1.setAttribute('src',images[0]);
img2.setAttribute('src',images[1]);
img3.setAttribute('src',images[2]);

function nextSlide3(){

}


