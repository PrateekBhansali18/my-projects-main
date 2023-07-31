let slider_prevbttn = document.getElementById("slider_prevbttn")
let slider_nextbttn = document.getElementById("slider_nextbttn")
let card = document.getElementsByClassName("slider_card")
let slider_cards = document.querySelector(".slider_cards")
console.log(card)
let i = 0
function nextbttn() {
    if (i < 3) {
        let n;
        n = i;
        slider_prevbttn.style.display = "block"

        card[n].style.display = "none"
        card[n + 1].setAttribute("style", "transform: scale(0.8,0.8);  display: block ;transition: all 1s ")
        card[n + 2].setAttribute("style", "transform: scale(1.3,1.3);   display: block; transition: all 1s;")

        card[n + 3].setAttribute("style", "transform: scale(0.8,0.8);   display: block;transition: all 1s ")

        i++;
if(i==1){
    slider_nextbttn.style.display="none"
}
    
    }
    console.log(i)
}
function prevbttn() {
    card[i-1].setAttribute("style", "transform: scale(0.8,0.8);   display: block; transition: all 1s;")
    card[i].setAttribute("style", "transform: scale(1.3,1.3);   display: block; transition: all 1s;")
    card[i + 1].setAttribute("style", "transform: scale(0.8,0.8);  display: block ;transition: all 1s ")
    card[i + 2].style.display = "none"
    i--;
    slider_nextbttn.style.display = "block"
   


}
let bottom_slider=document.getElementsByClassName("bottom_slider")
console.log(bottom_slider)
let m=1
let k=0
function nextslider(){
    m++
    for(k=0;k<bottom_slider.length;k++){
        if(k==m)
        {
            bottom_slider[k].setAttribute("style"," margin-right: 2px;width: 15%;height: 2px;border: 2px solid #146a78 ;background-color: #146a78;margin-top: 1px;border-radius: 10px;")

        }
        else{
            bottom_slider[k].setAttribute("style"," margin-right: 2px;width: 15%;height: 2px;border: 2px solid grey ;background-color: grey;margin-top: 1px;border-radius: 10px;")
        }
    }
}
function prevslider(){
    m--
    for(k=0;k<bottom_slider.length;k++){
        if(k==m)
        {
            bottom_slider[k].setAttribute("style"," margin-right: 2px;width: 15%;height: 2px;border: 2px solid #146a78 ;background-color: #146a78;margin-top: 1px;border-radius: 10px;")

        }
        else{
            bottom_slider[k].setAttribute("style"," margin-right: 2px;width: 15%;height: 2px;border: 2px solid grey ;background-color: grey;margin-top: 1px;border-radius: 10px;")
        }
    }
}
function hover1(){
    card[0].setAttribute("style","transform:scale(1.2,1.2);")
    card[1].setAttribute("style","transform:scale(0.8,0.8);")
    bottom_slider[0].setAttribute("style"," margin-right: 2px;width: 15%;height: 2px;border: 2px solid #146a78 ;background-color: #146a78;margin-top: 1px;border-radius: 10px;")
    bottom_slider[1].setAttribute("style"," margin-right: 2px;width: 15%;height: 2px;border: 2px solid grey ;background-color: grey;margin-top: 1px;border-radius: 10px;")
}
function outhover1(){
    card[0].setAttribute("style","transform:scale(0.8,0.8);")
    card[1].setAttribute("style","transform:scale(1.2,1.2);")
    bottom_slider[1].setAttribute("style"," margin-right: 2px;width: 15%;height: 2px;border: 2px solid #146a78 ;background-color: #146a78;margin-top: 1px;border-radius: 10px;")
    bottom_slider[0].setAttribute("style"," margin-right: 2px;width: 15%;height: 2px;border: 2px solid grey ;background-color: grey;margin-top: 1px;border-radius: 10px;")
}
function hover2(){
    card[3].setAttribute("style","transform:scale(1.2,1.2); display:block;")
    card[2].setAttribute("style","transform:scale(0.8,0.8);display:block;")
    bottom_slider[3].setAttribute("style"," margin-right: 2px;width: 15%;height: 2px;border: 2px solid #146a78 ;background-color: #146a78;margin-top: 1px;border-radius: 10px;")
    bottom_slider[2].setAttribute("style"," margin-right: 2px;width: 15%;height: 2px;border: 2px solid grey ;background-color: grey;margin-top: 1px;border-radius: 10px;")
}
function outhover2(){
    card[3].setAttribute("style","transform:scale(0.8,0.8);display:block;")
    card[2].setAttribute("style","transform:scale(1.2,1.2);display:block;")
    bottom_slider[2].setAttribute("style"," margin-right: 2px;width: 15%;height: 2px;border: 2px solid #146a78 ;background-color: #146a78;margin-top: 1px;border-radius: 10px;")
    bottom_slider[3].setAttribute("style"," margin-right: 2px;width: 15%;height: 2px;border: 2px solid grey ;background-color: grey;margin-top: 1px;border-radius: 10px;")
}