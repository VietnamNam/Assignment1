/************************* CHANGE IMAGES ON THE LEFT SIDE *************************************/

var BIL = document.getElementById("BigImgLeft")

document.getElementById("ImgLeft1").addEventListener("click", function(){
    BIL.src = "1.jpg";
});

document.getElementById("ImgLeft2").addEventListener("click", function(){
    BIL.src = "2.jpg";
});

document.getElementById("ImgLeft3").addEventListener("click", function(){
    BIL.src = "3.jpg";
});

/***************************** ICONS (MOVING) ON THE LEFT SIDE *******************************/

var lefthor = 0;
var leftvert = 0;

document.getElementById("LeftLeft").addEventListener("click", function(){
    lefthor = lefthor - 2.5;
    BIL.style.left = lefthor+"%";
});

document.getElementById("LeftRight").addEventListener("click", function(){
    lefthor = lefthor + 2.5;
    BIL.style.left = lefthor+"%";
});

document.getElementById("LeftUp").addEventListener("click", function(){
    leftvert = leftvert - 10;
    BIL.style.top = leftvert+"%";
});

document.getElementById("LeftDown").addEventListener("click", function(){
    leftvert = leftvert + 10;
    BIL.style.top = leftvert+"%";
});

/************************* ICONS (CHANGING SIZE) ON THE LEFT SIDE *****************************/
var lefthorsize = 30;
var leftvertsize = 40;

document.getElementById("LeftZoomin").addEventListener("click", function(){
    lefthorsize = lefthorsize + 5;
    BIL.style.width = lefthorsize+"%";
    leftvertsize = leftvertsize + 5;
    BIL.style.height = leftvertsize+"%";
});

document.getElementById("LeftZoomout").addEventListener("click", function(){
    lefthorsize = lefthorsize - 5;
    BIL.style.width = lefthorsize+"%";
    leftvertsize = leftvertsize - 5;
    BIL.style.height = leftvertsize+"%";
});

/************************************** RESET BUTTON ******************************************/

document.getElementById("ResetLeft").addEventListener("click", function(){
    lefthorsize = 30;
    leftvertsize = 40;
    lefthor = 0;
    leftvert = 0;
    BIL.style.width = "30%";
    BIL.style.height = "40%";
    BIL.style.top = "0px";
    BIL.style.bottom = "0px";
    BIL.style.left = "0px";
});

/*********************************** IN 'N OUT ON THE LEFT SIDE *******************************/

document.getElementById("LeftArrowin").addEventListener("click", function(){
    document.getElementById("BarsLeft").style.left = "-5.7%";
});

document.getElementById("LeftArrowout").addEventListener("click", function(){
    document.getElementById("BarsLeft").style.left = "0.5%";
});