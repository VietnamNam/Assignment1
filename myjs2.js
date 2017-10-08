/******************************* CHANGE IMAGES ON THE RIGHT SIDE ******************************/
var BIR = document.getElementById("BigImgRight")

document.getElementById("ImgRight1").addEventListener("click", function(){
    BIR.src = "4.jpg";
});

document.getElementById("ImgRight2").addEventListener("click", function(){
    BIR.src = "5.jpg";
});

document.getElementById("ImgRight3").addEventListener("click", function(){
    BIR.src = "6.jpg";
});

/**************************** ICONS (MOVING) ON THE RIGHT SIDE *******************************/

var righthor = 0;
var rightvert = 0;

document.getElementById("RightRight").addEventListener("click", function(){
    righthor = righthor - 2.5;
    BIR.style.right = righthor+"%";
});

document.getElementById("RightLeft").addEventListener("click", function(){
    righthor = righthor + 2.5;
    BIR.style.right = righthor +"%";
});

document.getElementById("RightUp").addEventListener("click", function(){
    rightvert = rightvert - 10;
    BIR.style.top = rightvert+"%";
});

document.getElementById("RightDown").addEventListener("click", function(){
    rightvert = rightvert +10;
    BIR.style.top = rightvert+"%";
});

/************************* ICONS (CHANGING SIZE) ON THE RIGHT SIDE ****************************/

var righthorsize = 30;
var rightvertsize = 40;

document.getElementById("RightZoomin").addEventListener("click", function(){
    righthorsize = righthorsize + 5;
    rightvertsize = rightvertsize + 5;
    BIR.style.width = righthorsize+"%";
    BIR.style.height = rightvertsize+"%";
});

document.getElementById("RightZoomout").addEventListener("click", function(){
    righthorsize = righthorsize - 5;
    BIR.style.width = righthorsize+"%";
    rightvertsize = rightvertsize - 5;
    BIR.style.height = rightvertsize+"%";
});

/************************************** RESET BUTTON ******************************************/

document.getElementById("ResetRight").addEventListener("click", function(){
    righthor = 0;
    rightvert = 0;
    righthorsize = 30;
    rightvertsize = 40;
    BIR.style.width = "30%";
    BIR.style.height = "40%";
    BIR.style.top = "0px";
    BIR.style.bottom = "0px";
    BIR.style.right = "0px";
});

/*********************************** IN 'N OUT ON THE RIGHT SIDE *******************************/

document.getElementById("RightArrowin").addEventListener("click", function(){
    document.getElementById("BarsRight").style.right = "-5.7%";
})

document.getElementById("RightArrowout").addEventListener("click", function(){
    document.getElementById("BarsRight").style.right = "0.5%";
});