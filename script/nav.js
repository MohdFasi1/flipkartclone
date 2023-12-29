let nav = document.querySelector('.ham-nav');
let disp = document.querySelector('.disp');
let cl = document.querySelector('.clos')
let doc = document.querySelector('*')
let body = document.querySelector('body')
let hamImg = document.querySelector('.ham-img')
let overlay = document.querySelector('.overlay')
function menu(){
    nav.style.transform = 'translateX(0)'
    disp.style.opacity = '0.5'
    disp.style.pointerEvents = 'none';
    body.style.overflowY = 'hidden';
    overlay.style.display = 'block'
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'
}
function clos(){
    nav.style.transform = 'translateX(-100%)'
    disp.style.opacity = '1'
    disp.style.pointerEvents = 'visible';
    body.style.overflowY = 'visible';
    overlay.style.display = 'none'
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'
}
document.onclick= function(e){
    if(!nav.contains(e.target) && !hamImg.contains(e.target)){
        clos()
    }
}
