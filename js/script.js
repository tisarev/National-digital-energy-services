const swiperPrimary = new Swiper('.primary__text-slider__block', {
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.primary__text-slider__block-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
  });
  const swipeProducts = new Swiper('.products__list', {
    // Optional parameters
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 640px
        1100: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      },
    // If we need pagination
    pagination: {
      el: '.products__list-pagination',
      clickable: true,
    },
  });
  // popap
const popap = document.querySelector('.popap');
const popapClose = document.querySelectorAll('.popap__close');
const popapBtns = document.querySelectorAll('.popap__btn');
const popapBlocks = document.querySelectorAll('.popap__block');

popapBtns.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');

        popapBlocks.forEach((el) => {
            el.classList.remove('active');
        });

        popap.classList.add('active');
        document.querySelector(`[data-popap="${path}"]`).classList.add('active');
    });
});

popapClose.forEach((el) => {
    el.addEventListener("click", function(){
        popap.classList.remove('active');
        popapBlocks.forEach((el) => {
            el.classList.remove('active');
        });
    });
});

popap.addEventListener('click', (e) => {
    if (e.target == popap) {
        popap.classList.remove('active');
        popapBlocks.forEach((el) => {
            el.classList.remove('active');
        });
    }
});
// popap
//header
let getTop = () => window.pageYOffset || document.documentElement.scrollTo;
const offset = 10;
document.addEventListener('DOMContentLoaded', function () {
    const headerScrollTop = document.querySelector('header');
    window.addEventListener('scroll', () => {
      if (getTop() > offset) {
        headerScrollTop.classList.add('active');
      } else {
        headerScrollTop.classList.remove('active');
      }
    });
  });
const getId = (link) => link.getAttribute('href').replace('#', '');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.header__menu-a').forEach((link) => {
          link.classList.toggle('active', getId(link) === entry.target.id);
        });
      }
    });
  }, {
      threshold: 0.7,
    });
  document.querySelectorAll('.section').forEach((section) => observer.observe(section),
  );
let menuUl = document.querySelector('.header__menu');
if (menuUl) {
  menuUl.addEventListener('click', (event) => {
    if (event.target.classList.contains('header__menu-a')) {
      event.preventDefault();
      window.scrollTo({
        top: document.getElementById(getId(event.target)).offsetTop - 100,
        behavior: 'smooth',
      });
    }
  });
}
//header
function cookies() {
    const cookie = document.querySelector('.cookies');
    cookie.classList.add('cookies-close');
  }