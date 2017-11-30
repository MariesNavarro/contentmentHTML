function _(el){return document.getElementById(el); }
var checkMobile = false;
var headT =  document.getElementsByTagName("head")[0];
var linkCSS  = document.createElement('link');
linkCSS.rel  = 'stylesheet';
linkCSS.type = 'text/css';

var btnMobile = _('btnMobile'),
    btnMobileImg = _('btnMobileImg'),
    menu = _('menu'),
    swipe = _('swipe'),
    openMobile = true;
    var slider = _('slider');
    var btnsSlide = document.getElementsByClassName('btnsSlide');
    var w = window.innerWidth;

    var pillar = document.getElementsByClassName('pillar'),
        pillarImg = document.getElementsByClassName('pillarImg'),
        cross = document.getElementsByClassName('cross'),
        crossF = document.getElementsByClassName('crossF'),
        pointsPillar = document.getElementsByClassName('pointsPillar');

window.onload = function (){
  if(bowser.mobile || bowser.tablet || /SymbianOS/.test(window.navigator.userAgent)) checkMobile = true;
  if(checkMobile){
    linkCSS.href = "css/masterMobile.css";
    headT.appendChild(linkCSS);
    console.log("Mobile");
    slide(1);
    for(var i = 0; i<pillar.length; i++){
      scaleImgMobile(pillar[i], pillarImg[i], cross[i], crossF[i]);
    }
  }else{
    linkCSS.href = "css/masterDesktop.css";
    headT.appendChild(linkCSS);
    console.log("Desktop");
    slide(1);
    for(var i = 0; i<pillar.length; i++){
      scaleImg(pillar[i], pillarImg[i], cross[i], crossF[i], pointsPillar[i]);
    }
  }
}

var slideTime = 0;
slideAni();

function slideAni(){
  var loopSlide = setInterval(function(){
    slideTime += 1;
    if (slideTime > 2) slideTime = 0;
    if(slideTime === 0){
      slider.style.left = "0%";
      btnsSlide[0].style.background = "rgba(255,255,255,1)";
      btnsSlide[1].style.background = "rgba(255,255,255,0)";
      btnsSlide[2].style.background = "rgba(255,255,255,0)";
    }
    if(slideTime === 1){
      slider.style.left = "-100%";
      btnsSlide[0].style.background = "rgba(255,255,255,0)";
      btnsSlide[1].style.background = "rgba(255,255,255,1)";
      btnsSlide[2].style.background = "rgba(255,255,255,0)";
    };
    if(slideTime === 2){
      slider.style.left = "-200%";
      btnsSlide[0].style.background = "rgba(255,255,255,0)";
      btnsSlide[1].style.background = "rgba(255,255,255,0)";
      btnsSlide[2].style.background = "rgba(255,255,255,1)";
    }
  },16000);
}


var uno = _('uno'),
    dos = _('dos'),
    tres = _('tres');

uno.addEventListener('click', function(){
  slider.style.left = "0%";
  btnsSlide[0].style.background = "rgba(255,255,255,1)";
  btnsSlide[1].style.background = "rgba(255,255,255,0)";
  btnsSlide[2].style.background = "rgba(255,255,255,0)";
});


dos.addEventListener('click', function(){
  slider.style.left = "-100%";
  btnsSlide[0].style.background = "rgba(255,255,255,0)";
  btnsSlide[1].style.background = "rgba(255,255,255,1)";
  btnsSlide[2].style.background = "rgba(255,255,255,0)";
});

tres.addEventListener('click', function(){
  slider.style.left = "-200%";
  btnsSlide[0].style.background = "rgba(255,255,255,0)";
  btnsSlide[1].style.background = "rgba(255,255,255,0)";
  btnsSlide[2].style.background = "rgba(255,255,255,1)";
});


function slide(p){
  if(p === 1 || slideTime === 0){
    slider.style.left = "0%";
    btnsSlide[0].style.background = "rgba(255,255,255,1)";
    btnsSlide[1].style.background = "rgba(255,255,255,0)";
    btnsSlide[2].style.background = "rgba(255,255,255,0)";
  }
  if(p === 2 || slideTime === 1){
    slider.style.left = "-100%";
    btnsSlide[0].style.background = "rgba(255,255,255,0)";
    btnsSlide[1].style.background = "rgba(255,255,255,1)";
    btnsSlide[2].style.background = "rgba(255,255,255,0)";
  }
  if(p === 3 || slideTime === 2){
    slider.style.left = "-200%";
    btnsSlide[0].style.background = "rgba(255,255,255,0)";
    btnsSlide[1].style.background = "rgba(255,255,255,0)";
    btnsSlide[2].style.background = "rgba(255,255,255,1)";
  }
}

function scaleImg(e, a, c, d, points){
 e.addEventListener('mouseover', function(){
   a.style.transform = "scale(1.3,1.3)";
   c.style.transform = "rotate(45deg)";
 points.style.opacity = "1";
   setTimeout(function(){
     c.style.opacity = "0";
     d.style.opacity = "1";

   },200);
 });
 e.addEventListener('mouseout', function(){
   a.style.transform = "scale(1,1)";
   c.style.transform = "rotate(0)";
    points.style.opacity = "0";
   setTimeout(function(){
     c.style.opacity = "1";
     d.style.opacity = "0";
   },200);
 });
}


function scaleImgMobile(e, a, c, d){
 e.addEventListener('touchstart', function(){
   a.style.transform = "scale(1.3,1.3)";
   c.style.transform = "rotate(45deg)";
   j.style.opacity = "1";
   setTimeout(function(){
     c.style.opacity = "0";
     d.style.opacity = "1";
   },200);
 });
 e.addEventListener('touchend', function(){
   a.style.transform = "scale(1,1)";
   c.style.transform = "rotate(0)";
   j.style.opacity = "0";
   setTimeout(function(){
     c.style.opacity = "1";
     d.style.opacity = "0";
   },200);
 });
}

btnMobile.addEventListener('click', function(){
  openMobile = !openMobile;
  if(openMobile){
    btnMobileImg.setAttribute('src', 'img/icons/close.svg');
    menu.style.left  = "0";
  } else {
    btnMobileImg.setAttribute('src', 'img/icons/menu.svg');
    menu.style.left  = "100%";
  }
});
