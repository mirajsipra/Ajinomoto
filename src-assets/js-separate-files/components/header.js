var body = document.querySelector("body");
let siteHeader = document.querySelector('header.site-header');

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    body.classList.add("is-scrolling");
  } else {
    body.classList.remove("is-scrolling");
  }
});


var siteNavigation = document.getElementById('siteNavigation');
siteNavigation.addEventListener('show.bs.collapse', function () {
  this.classList.add('active');
  body.classList.add("overflow-stopped");
  body.classList.add("menu-opened");
})
siteNavigation.addEventListener('hide.bs.collapse', function () {
  this.classList.remove('active');
  body.classList.remove("overflow-stopped");
  body.classList.remove("menu-opened");
});


setHeaderHeight();

function getHeaderHeight() {
  var headerHeight = siteHeader.offsetHeight;
  return headerHeight;
}

function setHeaderHeight() {
  var headerHeight = getHeaderHeight();
  document.documentElement.style
    .setProperty('--header-height', headerHeight + 'px');
}

window.addEventListener('load', function (e) {
  setHeaderHeight();
});

window.addEventListener('resize', function (e) {
  setHeaderHeight();
});