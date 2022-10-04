const skillsArr = ['CAPABILITIES', 'INDUSTRIES', 'FUNCTIONS'];

const reviewsSwiper = new Swiper('.reviewsSwiper', {
  speed: 600,
  parallax: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const skillsSwiper = new Swiper('.skillsSwiper', {
  speed: 600,
  parallax: true,
  lazy: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + skillsArr[index] + '</span>';
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
