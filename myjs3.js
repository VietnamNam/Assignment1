/******************************** CHANGE IMAGES ON THE TOP SIDE *******************************/

var BIT = document.getElementById("BigImgTop")

document.getElementById("ImgTop1").addEventListener("click", function(){
    BIT.src = "7.jpg";
});

document.getElementById("ImgTop2").addEventListener("click", function(){
    BIT.src = "8.jpg";
});

document.getElementById("ImgTop3").addEventListener("click", function(){
    BIT.src = "9.jpg";
});

/**************************** ICONS (MOVING) ON THE TOP SIDE *******************************/

var tophor = 0;
var topvert = 0;

document.getElementById("TopLeft").addEventListener("click", function(){
    tophor = tophor - 5;
    BIT.style.left = tophor+"%";
});

document.getElementById("TopRight").addEventListener("click", function(){
    tophor = tophor + 5;
    BIT.style.left = tophor+"%";
});

document.getElementById("TopUp").addEventListener("click", function(){
    topvert = topvert - 5;
    BIT.style.top = topvert+"%";
});

document.getElementById("TopDown").addEventListener("click", function(){
    topvert = topvert + 5;
    BIT.style.top = topvert+"%";
});

/************************* ICONS (CHANGING SIZE) ON THE TOP SIDE ****************************/

var tophorsize = 30;
var topvertsize = 40;

document.getElementById("TopZoomin").addEventListener("click", function(){
    tophorsize = tophorsize + 5;
    topvertsize = topvertsize + 5;
    BIT.style.width = tophorsize+"%";
    BIT.style.height = topvertsize+"%";
})

document.getElementById("TopZoomout").addEventListener("click", function(){
    tophorsize = tophorsize - 5;
    topvertsize = topvertsize - 5;
    BIT.style.width = tophorsize+"%";
    BIT.style.height = topvertsize+"%";
})

/************************************** RESET BUTTON ******************************************/

document.getElementById("ResetTop").addEventListener("click", function(){
    tophor = 0;
    topvert = 0;
    tophorsize = 30;
    topvertsize = 40;
    BIT.style.width = "30%";
    BIT.style.height = "40%";
    BIT.style.left = "0px";
    BIT.style.right = "0px";
    BIT.style.top = "0px";
})

/*********************************** IN 'N OUT ON THE TOP SIDE *******************************/

document.getElementById("TopArrowin").addEventListener("click", function(){
    document.getElementById("BarsTop").style.top = "-10%";
});

document.getElementById("TopArrowout").addEventListener("click", function(){
    document.getElementById("BarsTop").style.top = "1.25%";
});