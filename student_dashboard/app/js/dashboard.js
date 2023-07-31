function previousbttn(){
    window.history.go(-1);
}
function nextbttn(){
    window.history.go(1)
}
let outercontainer=document.querySelector(".outercontainer")
function popup(){
   let popup=document.querySelector(".popup")
//    popup.style.display="flex"
   outercontainer.style.filter="blur(20px)"


}