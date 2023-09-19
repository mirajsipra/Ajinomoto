var body = document.querySelector("body");
let siteHeader = document.querySelector('header.site-header');

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    body.classList.add("is-scrolling");
  } else {
    body.classList.remove("is-scrolling");
  }
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

/* Dropdown menu open on hover */
if (window.innerWidth > 992) {
  document.querySelectorAll('.navbar-nav .dropdown').forEach(function (each) {
    each.addEventListener('mouseover', function (e) {

      let el_link = this.querySelector('a[data-bs-toggle]');
      if (el_link != null) {
        let nextEl = el_link.nextElementSibling;
        el_link.classList.add('show');
        nextEl.classList.add('show');
      }
      body.classList.add("menu-opened");
    });
    each.addEventListener('mouseleave', function (e) {
      let el_link = this.querySelector('a[data-bs-toggle]');
      if (el_link != null) {
        let nextEl = el_link.nextElementSibling;
        el_link.classList.remove('show');
        nextEl.classList.remove('show');
      }
      body.classList.remove("menu-opened");
    })
  });

  document.querySelectorAll('.navbar-nav .dropdown').forEach(function (each) {
    each.addEventListener('mouseover', function (e) {

      let el_link = this.querySelector('.dropdown-toggle');
      if (el_link != null) {
        let nextEl = el_link.nextElementSibling;
        el_link.classList.add('show');
        nextEl.classList.add('show');
      }
    });
    each.addEventListener('mouseleave', function (e) {
      let el_link = this.querySelector('.dropdown-toggle');
      if (el_link != null) {
        let nextEl = el_link.nextElementSibling;
        el_link.classList.remove('show');
        nextEl.classList.remove('show');
      }
    })
  });
}
