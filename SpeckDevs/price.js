let webBtn = document.getElementById('webBtn');
let uiuxBtn = document.getElementById('uiuxBtn');
let digitalBtn = document.getElementById('digitalBtn');
let appBtn = document.getElementById('appBtn');
let webmainBtn = document.getElementById('webmainBtn');
let graphicsBtn = document.getElementById('graphicsBtn');

let web = document.getElementsByClassName('webp')[0];
let uiux = document.getElementsByClassName('uiux')[0];
let digital = document.getElementsByClassName('digital')[0];
let app = document.getElementsByClassName('app')[0];
let webmain = document.getElementsByClassName('webmain')[0];
let graphics = document.getElementsByClassName('graphics')[0];



webBtn.onclick = function() {
    web.style.left = '40px';
    uiux.style.left = '100vw';
    digital.style.left = '100vw';
    app.style.left = '100vw';
    webmain.style.left = '100vw';
    graphics.style.left = '100vw';
    webBtn.classList.add('active');
    digitalBtn.classList.remove('active');
    graphicsBtn.classList.remove('active');
    webmain.classList.remove('active');
    appBtn.classList.remove('active');
    uiuxBtn.classList.remove('active');
}

uiuxBtn.onclick = function() {
    web.style.left = '-100vw';
    uiux.style.left = '40px';
    digital.style.left = '100vw';
    app.style.left = '100vw';
    webmain.style.left = '100vw';
    graphics.style.left = '100vw';
    uiuxBtn.classList.add('active');
    digitalBtn.classList.remove('active');
    graphicsBtn.classList.remove('active');
    webmain.classList.remove('active');
    appBtn.classList.remove('active');
    webBtn.classList.remove('active');
}

digitalBtn.onclick = function() {
    web.style.left = '-100vw';
    uiux.style.left = '-100vw';
    digital.style.left = '40px';
    app.style.left = '100vw';
    webmain.style.left = '100vw';
    graphics.style.left = '100vw';
    digitalBtn.classList.add('active');
    graphicsBtn.classList.remove('active');
    uiuxBtn.classList.remove('active');
    webmain.classList.remove('active');
    appBtn.classList.remove('active');
    webBtn.classList.remove('active');
}

appBtn.onclick = function() {
    web.style.left = '-100vw';
    uiux.style.left = '-100vw';
    digital.style.left = '-100vw';
    app.style.left = '40px';
    webmain.style.left = '100vw';
    graphics.style.left = '100vw';
    appBtn.classList.add('active');
    graphicsBtn.classList.remove('active');
    uiuxBtn.classList.remove('active');
    digitalBtn.classList.remove('active');
    webmain.classList.remove('active');
    webBtn.classList.remove('active');
}

webmainBtn.onclick = function() {
    web.style.left = '-100vw';
    uiux.style.left = '-100vw';
    digital.style.left = '-100vw';
    app.style.left = '-100vw';
    webmain.style.left = '40px';
    graphics.style.left = '100vw';
    webmainBtn.classList.add('active');
    graphicsBtn.classList.remove('active');
    uiuxBtn.classList.remove('active');
    digitalBtn.classList.remove('active');
    appBtn.classList.remove('active');
    webBtn.classList.remove('active');
}

graphicsBtn.onclick = function() {
    web.style.left = '-100vw';
    uiux.style.left = '-100vw';
    digital.style.left = '-100vw';
    app.style.left = '-100vw';
    webmain.style.left = '-100vw';
    graphics.style.left = '40px';
    graphicsBtn.classList.add('active');
    uiuxBtn.classList.remove('active');
    digitalBtn.classList.remove('active');
    appBtn.classList.remove('active');
    webmainBtn.classList.remove('active');
    webBtn.classList.remove('active');
}