function _(el){return document.getElementById(el); }
function __(el){return document.getElementsByClassName(el); }
var checkMobile = false;
var menuLinkLi = document.getElementsByClassName('menuLinkLi');
var headT =  document.getElementsByTagName("head")[0];
var linkCSS  = document.createElement('link');
var linkCssMAster  = document.createElement('link');
linkCSS.rel  = 'stylesheet';
linkCSS.type = 'text/css';
linkCssMAster.rel  = 'stylesheet';
linkCssMAster.type = 'text/css';
var chap1 = _('chap1'),
    chText1 = _('chText1'),
    chImgt1 = _('chImgt1'),
    chap2 = _('chap2'),
    chText2 = _('chText2'),
    chImgt2 = _('chImgt2'),
    chap3 = _('chap3'),
    chText3 = _('chText3'),
    chImgt3 = _('chImgt3'),
    chap4 = _('chap4'),
    chText4 = _('chText4'),
    chImgt4 = _('chImgt4'),
    aboutfooter = __('aboutfooter');




function fixFooter(){
  var h1 = Number(chap1.style.height.substring(0, 3));
      h2 = Number(chap2.style.height.substring(0, 3)),
      h3 = Number(chap3.style.height.substring(0, 3)),
      h4 = Number(chap4.style.height.substring(0, 3)),
      tex3 = Number(chText3.offsetHeight),
      tex4 = Number(chText4.offsetHeight)/2,
  sumH = h1  + h2  + h3  + h4 + tex4;
  aboutfooter[0].style.top = sumH + "px";
}


window.onload = function(){
  if(bowser.mobile || bowser.tablet || /SymbianOS/.test(window.navigator.userAgent)) checkMobile = true;
  if(checkMobile){
    linkCssMAster.href = "css/masterMobile.css";
    linkCSS.href = "css/sectionsMobile.css";
    headT.appendChild(linkCSS);
    headT.appendChild(linkCssMAster);
    setTimeout(function(){
      fixFooter();
    },3000);
    console.log("Mobile");
  }else{
    linkCssMAster.href = "css/masterDesktop.css";
    linkCSS.href = "css/sectionsDesktop.css";
    headT.appendChild(linkCSS);
    headT.appendChild(linkCssMAster);
    console.log("Desktop");
  }
  /* Set Heights */
  setTimeout(function(){
    setHeight(chText1, chImgt1, chap1);
    setHeight(chText2, chImgt2, chap2);
    setHeight(chText3, chImgt3, chap3);
    setHeight(chText4, chImgt4, chap4);
  },500);
}

function setHeight(ei, eo, ch){
  var h = ei.clientHeight;
  eo.style.height = h + "px";
  ch.style.height = h + "px";
}


window.onresize = function (){
  /* Set Heights */
  setHeight(chText1, chImgt1, chap1);
  setHeight(chText2, chImgt2, chap2);
  setHeight(chText3, chImgt3, chap3);
  setHeight(chText4, chImgt4, chap4);
  document.getElementById("size").innerHTML = "W: " + window.innerWidth + "px | H: " + window.innerHeight + "px";
}

window.addEventListener("orientationchange", function() {
  if(window.orientation == 90 || window.orientation == -90){
    aboutfooter[0].style.display = "none";
    for(var i =0; i < menuLinkLi.length; i++){
      menuLinkLi[i].style.marginBottom = "2px";
    }
  } else {
    aboutfooter[0].style.display = "block";
    for(var i =0; i < menuLinkLi.length; i++){
      menuLinkLi[i].style.marginBottom = "15px";
      }
  }
}, false);
var menuMain = _('menuMain');
var percentage = _('percentage');
var loading = _('loading');
var valPercentage = 0;
var loop = setInterval(function(){
  valPercentage++;
  percentage.innerHTML = valPercentage + "%";
  if(valPercentage > 99) {
    clearInterval(loop);
    loading.style.opacity = "0";
    setTimeout(function(){
      loading.style.display = "none";
      menuMain.style.opacity = "1";
    },500)
  }
},11);

  var btnMobile = _('btnMobile'),
      btnMobileImg = _('btnMobileImg'),
      menu = _('menu'),
      openMobile = true;

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
