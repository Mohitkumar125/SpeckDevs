let open = document.getElementById('open');
let menu = document.getElementById('menu');
let close = document.getElementById('close');

open.addEventListener('click', function() {
    // let nav = document.getElementById('nav');
    // nav.classList.toggle('show');
    menu.classList.add('active');
});


close.addEventListener('click', function() {
    // let nav = document.getElementById('nav');
    // nav.classList.toggle('show');
    menu.classList.remove('active');
});
//scrollbal progress
function progressBarScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
  }
  
  window.onscroll = function () {
    progressBarScroll();
  };


