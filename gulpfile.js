var content1 = document.getElementById("content1")
var content2 = document.getElementById("content2")
var content3 = document.getElementById("content3")
var content4 = document.getElementById("content4")

var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")
var btn4 = document.getElementById("btn4")

function openLaikas(){
    content1.style.transform = "translateX(0)"
    content2.style.transform = "translateX(100%)"
    content3.style.transform = "translateX(100%)"
    content4.style.transform = "translateX(100%)"
    btn1.style.color = "rgba(45, 85, 71, 0.434)"
    btn2.style.color = "#000"
    btn3.style.color = "#000"
    btn4.style.color = "#000"
    content1.style.transitionDelay = "0.3s"
    content2.style.transitionDelay = "0s"
    content3.style.transitionDelay = "0s"
    content4.style.transitionDelay = "0s"
}

function openAtnaujink(){
    content1.style.transform = "translateX(100%)"
    content2.style.transform = "translateX(0)"
    content3.style.transform = "translateX(100%)"
    content4.style.transform = "translateX(100%)"
    btn1.style.color = "#000"
    btn2.style.color = "rgba(45, 85, 71, 0.434)"
    btn3.style.color = "#000"
    btn4.style.color = "#000"
    content1.style.transitionDelay = "0s"
    content2.style.transitionDelay = "0.3s"
    content3.style.transitionDelay = "0s"
    content4.style.transitionDelay = "0s"
}

function openApsidairyk(){
    content1.style.transform = "translateX(100%)"
    content2.style.transform = "translateX(100%)"
    content3.style.transform = "translateX(0)"
    content4.style.transform = "translateX(100%)"
    btn1.style.color = "#000"
    btn2.style.color = "#000"
    btn3.style.color = "rgba(45, 85, 71, 0.434)"
    btn4.style.color = "#000"
    content1.style.transitionDelay = "0s"
    content2.style.transitionDelay = "0s"
    content3.style.transitionDelay = "0.3s"
    content4.style.transitionDelay = "0s"
  
}

function openSkirsk(){
    content1.style.transform = "translateX(100%)"
    content2.style.transform = "translateX(100%)"
    content3.style.transform = "translateX(100%)"
    content4.style.transform = "translateX(0)"
    btn1.style.color = "#000"
    btn2.style.color = "#000"
    btn3.style.color = "#000"
    btn4.style.color = "rgba(45, 85, 71, 0.434)"
    content1.style.transitionDelay = "0s"
    content2.style.transitionDelay = "0s"
    content3.style.transitionDelay = "0s"
    content4.style.transitionDelay = "0.3s"
}








