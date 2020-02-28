
import Swiper from 'swiper';
import $ from 'jquery'

class ProductListing {
    constructor() {
      if (document.querySelector(".product-listing")){
       
        this.init();
      }
    }
  
    init() {
     $(document).ready(function(){
       var imageSource = $('.js-style-img').attr('src');
        $('.style-check').on('click',function(){
            imageSource = $(this).attr('data-src');
                // alert(imageSource)
            $('.js-style-img').attr('src',imageSource)
        })

        $(".js-btn-proceed").click(function(e){
            // e.preventDefault();
            if($(".savedItem").css("display","none")){
                $(".savedItem").css({display:"block"})
            }
            const ele = '<li class="slide-item swiper-slide"><div class="style-card"><img class="saved-img" src="'+imageSource+'" alt="" /></div><div class="d-flex pt-2 align-items-center  " ><p class="fnt-11 w-100 pr-2">As shown</p><img class="share-icon mr-2" src="./assets/images/share.svg" alt="" /></div></li>'
            // $('.slide-item-wrp').append(ele)
            // if($(".slide-item").length> 4){
                var swiperStyle = new Swiper('.js-style-slider', {
                    // loop: true,
                    // nextButton: '.swiper-button-next',
                    // prevButton: '.swiper-button-prev',
                    slidesPerView: 3,
                    paginationClickable: true,
                    spaceBetween: 20,
                    breakpoints: {
                        1920: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        1028: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        }
                    }
                });
                // }
      
                
                swiperStyle.appendSlide(ele);
        })


     })

    }
}

export default ProductListing;