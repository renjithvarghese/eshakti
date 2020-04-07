
import $ from 'jquery'
import Swiper from 'swiper';

var wishlistSlider = new Swiper('.js-wishlist-slider', {
    loop: false,
    preventClicks: true,
    grabCursor: true,
    slidesPerView: 1.2,
    simulateTouch: false,
    spaceBetween: 0,
    observer: true,
    observeParents: true,
    grabCursor: false,
    loop: false,
    watchOverflow: true,
    navigation: false,
      // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
        slidesPerView: 1.4,
        },
        // when window width is >= 480px
        480: {
        slidesPerView: 1.5,
        },
        // when window width is >= 768px
        768: {
        slidesPerView: "auto",
        },
        992: {
            // navigation: {
            //     nextEl: '.left-arrow',
            //     prevEl: '.right-arrow',
            // },
        }
    }
});
$(".favourite-tabs .nav-item").click(function(){
    setTimeout(function(){
        wishlistSlider.update();
   
    },300);
  })

//Product Recent-items slider
import RecentlyViewed from './product-details/recent-item-slider'
const recentlyViewed = new RecentlyViewed();