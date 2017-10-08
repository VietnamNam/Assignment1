/******************************* CHANGE IMAGES ON THE BOTTOM SIDE *****************************/

var BIB = document.getElementById("BigImgBottom")

document.getElementById("ImgBottom1").addEventListener("click", function(){
    BIB.src = "10.jpg";
});

document.getElementById("ImgBottom2").addEventListener("click", function(){
    BIB.src = "11.jpg";
});

document.getElementById("ImgBottom3").addEventListener("click", function(){
    BIB.src = "12.jpg";
});

/**************************** ICONS (MOVING) ON THE BOTTOM SIDE *******************************/

var bottomhor = 0;
var bottomvert = 0;

document.getElementById("BottomLeft").addEventListener("click", function(){
    bottomhor -= 5;
    BIB.style.left = bottomhor+"%";
})

document.getElementById("BottomRight").addEventListener("click", function(){
    bottomhor += 5;
    BIB.style.left = bottomhor+"%";
})

document.getElementById("BottomUp").addEventListener("click", function(){
    bottomvert += 5;
    BIB.style.bottom = bottomvert+"%";
})

document.getElementById("BottomDown").addEventListener("click", function(){
    bottomvert -= 5;
    BIB.style.bottom = bottomvert+"%";
})

/************************* ICONS (CHANGING SIZE) ON THE BOTTOM SIDE ****************************/

var bottomhorsize = 30;
var bottomvertsize = 40;

document.getElementById("BottomZoomin").addEventListener("click", function(){
    bottomhorsize += 5;
    bottomvertsize += 5;
    BIB.style.width = bottomhorsize+"%";
    BIB.style.height = bottomvertsize+"%";
})

document.getElementById("BottomZoomout").addEventListener("click", function(){
    bottomhorsize -= 5;
    bottomvertsize -= 5;
    BIB.style.width = bottomhorsize+"%";
    BIB.style.height = bottomvertsize+"%";
})

/************************************** RESET BUTTON ******************************************/

document.getElementById("ResetBottom").addEventListener("click", function(){
    bottomhor = 0;
    bottomvert = 0;
    bottomhorsize = 30;
    bottomvertsize = 40;
    BIB.style.left = "0px";
    BIB.style.right = "0px";
    BIB.style.bottom = "0px";
    BIB.style.width = "30%";
    BIB.style.height = "40%";
})

/*********************************** IN 'N OUT ON THE BOTTOM SIDE *******************************/

document.getElementById("BottomArrowin").addEventListener("click", function(){
    document.getElementById("BarsBottom").style.bottom = "-10%";
});

document.getElementById("BottomArrowout").addEventListener("click", function(){
    document.getElementById("BarsBottom").style.bottom = "1.25%";
});