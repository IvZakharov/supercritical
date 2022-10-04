const filters = document.querySelectorAll('.categories__item');

filters.forEach((filter) => {
  filter.addEventListener('click', function (e) {
    let selectedFilter = filter.getAttribute('data-filter');
    let itemsToHide = document.querySelectorAll(
      `.items .item:not([data-filter='${selectedFilter}'])`,
    );
    let itemsToShow = document.querySelectorAll(`.items [data-filter='${selectedFilter}']`);

    filters.forEach(function (label) {
      label.classList.remove('active');
    });
    e.target.classList.add('active');
    if (selectedFilter == 'all') {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll('.items [data-filter]');
    }

    itemsToHide.forEach((el) => {
      el.classList.add('hide');
      el.classList.remove('show');
    });

    itemsToShow.forEach((el) => {
      el.classList.remove('hide');
      el.classList.add('show');
    });
  });
});
