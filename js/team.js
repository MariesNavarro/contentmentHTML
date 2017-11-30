var checkMobile = false;
var headT =  document.getElementsByTagName("head")[0];
var linkCSS  = document.createElement('link');
var menuLinkLi = document.getElementsByClassName('menuLinkLi');
var linkCssMAster  = document.createElement('link');
linkCSS.rel  = 'stylesheet';
linkCSS.type = 'text/css';
linkCssMAster.rel  = 'stylesheet';
linkCssMAster.type = 'text/css';
function _(el){return document.getElementById(el); }
function __(el){return document.getElementsByClassName(el); }

var topP = __('top');
var donateRot = _('donateRot');

window.onload = function(){
if(bowser.mobile || bowser.tablet || /SymbianOS/.test(window.navigator.userAgent)) checkMobile = true;
  if(checkMobile){
    linkCssMAster.href = "css/masterMobile.css";
    linkCSS.href = "css/sectionsMobile.css";
    headT.appendChild(linkCSS);
    headT.appendChild(linkCssMAster);
    console.log("Mobile");
  }else{
    linkCssMAster.href = "css/masterDesktop.css";
    linkCSS.href = "css/sectionsDesktop.css";
    headT.appendChild(linkCssMAster);
      headT.appendChild(linkCSS);
    console.log("Desktop");
  }
}

window.addEventListener("orientationchange", function() {
  if(window.orientation == 90 || window.orientation == -90){
    donateRot.style.margin = "3% auto auto 10%";
    for(var i =0; i < menuLinkLi.length; i++){
      menuLinkLi[i].style.marginBottom = "2px";
    }
  } else {
    donateRot.style.margin = "10% auto auto 10%";
    for(var i =0; i < menuLinkLi.length; i++){
      menuLinkLi[i].style.marginBottom = "15px";
      }
  }
}, false);

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
  },10);


function hoverTeam(i){
  topP[i].style.bottom = "50px";
  topP[i].style.opacity = "1";
}
function outTeam(i){
  topP[i].style.bottom = "0";
  topP[i].style.opacity = "0";
}
