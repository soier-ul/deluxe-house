$(function () {

  $('.lazy').lazy();

  // Аккардеон
  const accordions = document.querySelectorAll('.advice__item');

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.advice__btn');
      const content = self.querySelector('.advice__content');

      self.classList.toggle('advice__item--opened');

      if (self.classList.contains('advice__item--opened')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });
  // Аккардеон

  // header hide
  let lastScroll = 0;
  const defaultOffset = 300;
  const header = document.querySelector('.header');

  const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
  const containHide = () => header.classList.contains('header--hide');

  window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
      header.classList.add('header--hide');
    } else if (scrollPosition() < lastScroll && containHide()) {
      header.classList.remove('header--hide');
    }

    lastScroll = scrollPosition();
  })
  // header hide

  $('.slider__wrapper').slick({
    dots: true,
    infinite: false,
    lazyLoad: 'ondemand',
    prevArrow: '<button type="button" class="slider__arrow slider__arrow--prev"><svg><use xlink:href="images/sprite.svg#icon-chevron"></use></svg></button>',
    nextArrow: '<button type="button" class="slider__arrow slider__arrow--next"><svg><use xlink:href="images/sprite.svg#icon-chevron"></use></svg></button>',

    responsive: [{
      breakpoint: 1375,
      settings: {
        arrows: false
      }
    }]
  });

  // Табы
  $('.tabs__link').on('click', function (e) {
    e.preventDefault();
    $('.tabs__link').removeClass('tabs__link--active');
    $(this).addClass('tabs__link--active');

    $('.tabs__content-item').removeClass('tabs__content-item--active');
    $($(this).attr('href')).addClass('tabs__content-item--active');
  });
  // Табы

  $('.burger').on('click', function () {
    $('.menu').toggleClass('menu--active');
    $('.burger').toggleClass('burger--active');

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.burger, .menu')) {
        $('.menu').removeClass('menu--active');
        $('.burger').removeClass('burger--active');
      }
    });
  });

  $('.menu__item--portfolio').on('click', function (e) {
    $('.menu__list').toggleClass('menu__list--active');

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.menu__item--portfolio')) {
        $('.menu__list').removeClass('menu__list--active');
      }
    });
  });

  let center = [51.1268421196421, 71.43488022081894];

  function init() {
    let map = new ymaps.Map('map', {
      center: center,
      zoom: 17
    });

    let placemark = new ymaps.Placemark(center, {}, {
      iconLayout: 'default#image',
      iconImageHref: '../images/icons/marker.png',
      iconImageSize: [40, 40],
      iconImageOffset: [-20, -35]
    });

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('zoomControl');
    map.controls.remove('rulerControl');
    map.geoObjects.add(placemark);
  }

  ymaps.ready(init);

});

document.addEventListener('DOMContentLoaded', () => {

});