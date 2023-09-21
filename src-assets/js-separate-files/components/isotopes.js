import Isotope from 'isotope-layout';

var LatestPostsIsotopesSections = document.querySelectorAll('.blog--isotope-wrapper');

LatestPostsIsotopesSections.forEach(LatestPostsIsotopesSection => {
  let filterSidebar = LatestPostsIsotopesSection.querySelector('.blog-filter');
  let isotopeGrid = LatestPostsIsotopesSection.querySelector('.grid');
  var isotopeGridInstance = new Isotope(isotopeGrid, {
    itemSelector: '.grid-item',
    filter: '*',
    transitionDuration: '0.4s'
    // percentPosition: true,
  });

  let filterButtons = filterSidebar.querySelectorAll('.btn-filter');
  if (filterButtons.length) {

    filterButtons.forEach(filterButton => {
      filterButton.addEventListener('click', function (e) {
        filterButtons.forEach(element => {
          element.classList.remove("active");
        });
        this.classList.add('active');
        var filterValue = this.dataset.filter;
        isotopeGridInstance.arrange({
          filter: filterValue
        });
      });
    });
  }
  window.addEventListener('load', function (e) {
    isotopeGridInstance.layout();
  });
});
