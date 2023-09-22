import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

import './components/header';
import './components/swiper';
import './components/isotopes';


const dropdownElementList = document.querySelectorAll('.site-header .dropdown-toggle');
if (dropdownElementList) {
  const dropdownList = [...dropdownElementList].map(dropdownToggleEl => {
    let dropdownInstance = new bootstrap.Dropdown(dropdownToggleEl)
    if (window.matchMedia('(min-width: 992px)').matches && window.matchMedia('(any-hover: hover)').matches) {
      dropdownToggleEl.closest('.dropdown').addEventListener('mouseenter', function (e) {
        dropdownInstance.show();
        document.body.classList.add("menu-opened");
      });
      dropdownToggleEl.closest('.dropdown').addEventListener('mouseleave', function (e) {
        dropdownInstance.hide();
        document.body.classList.remove("menu-opened");
      });
    }
  })
}