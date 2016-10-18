

history.scrollRestoration = 'manual';

function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.pageYOffset;
    var perTick = difference / duration * 10;

        console.log(element.pageYOffset);
    console.log(difference);
    setTimeout(function() {
        window.scrollTo(0,element.pageYOffset + perTick);
        if (element.pageYOffset >= to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}

function scrollHash() {
    var hash = window.location.hash;
    var scrollto = 0;
    var div = document.getElementById(hash.replace('#',''));
    console.log(div.offsetTop);
    if (hash && div) {
        scrollTo(window, div.offsetTop, 600);
    }

    // $("html, body").animate({
    //     scrollTop: scrollto
    // }, 600);
}

document.addEventListener("DOMContentLoaded", function(e) {
  scrollHash();
  var links = document.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
      if (links[i].href.indexOf("#") != -1) {
        console.log(links[i].href);
        links[i].addEventListener("click", function(e){
          e.preventDefault();
          history.pushState({}, "", this.href);
          scrollHash();
        }, false);
      }
  }
  // $(document).on('click','a.animate-scroll', function(e){
  //   e.preventDefault();
  //   history.pushState({}, "", this.href);
  //   scrollHash();
  // });
});
