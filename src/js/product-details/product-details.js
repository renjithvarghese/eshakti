
import Swiper from 'swiper';
import $ from 'jquery'


class ProductDetais {
    constructor() {
      if (document.querySelector(".product-details")){
       
        this.init();
      }
    }
  
    init() {
     $(document).ready(function(){
      var swiperStyle;
       var neckText,sleeveText,lengthText;
       neckText = sleeveText = lengthText = "As shown";
        $(".js-read-more").click(function(e){
          e.preventDefault()
          alert(1)
          $(this).siblings('.more-info').toggle()
        })
        $('.neckline').children('.style-contain').find('.img-container').click(function(){
          neckText = $(this).children(".img-txt").text()
          console.log(neckText)
        })
        $('.sleeve').children('.style-contain').find('.img-container').click(function(){
          sleeveText = $(this).children(".img-txt").text()
          console.log(sleeveText)

        })
        $('.length').children('.style-contain').find('.img-container').click(function(){
          lengthText = $(this).children(".img-txt").text()
          console.log(lengthText)

        })
       var imageSource = $('.js-style-img').attr('src');
        $('.style-check').on('click',function(){
          
            imageSource = $(this).attr('data-src');
                // alert(imageSource)
              
            $('.js-style-img').attr('src',imageSource)
        })
        //thumbs
        var galleryThumbs = new Swiper('.js-slider-img', {
            spaceBetween: 10,
            slidesPerView: 1,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        
        var galleryTop = new Swiper('.js-slider-thumb', {
            spaceBetween: 10,
            slidesPerView: 4,
            effect: 'fade',
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            thumbs: {
              swiper: galleryThumbs
            }
          });


          //

          var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 10,
            slidesPerView: 3.5,
            // loop: true,
            freeMode: true,
            // loopedSlides: 5, //looped slides should be the same
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
              // Navigation arrows
          navigation: {
            nextEl: '.left-arrow',
            prevEl: '.right-arrow',
          },
    
            grabCursor: true,
            
          });
          var galleryTop = new Swiper('.gallery-top', {
            spaceBetween: 10,
            effect: 'fade',
            loop:true,
            loopedSlides: 5, //looped slides should be the same
            
            thumbs: {
              swiper: galleryThumbs,
            },
          });
        //save style
        $(".js-btn-save").click(function(e){
          var index = $(".slide-item").length
          
            // e.preventDefault();
            
            if($(".saveditem-container").css("display","none")){
                $(".saveditem-container").css({"display":"block"})
                $(".saved-btn").css({"display":"block"})
                $(".procced-btn").css({"display":"none"})

            }
            // let flag = lengthText.localeCompare(neckText.localeCompare(sleeveText))
            var cardTitle;
              if(neckText.localeCompare(sleeveText)){
                if(lengthText.localeCompare(sleeveText)){
                  cardTitle = neckText
                }
              }else{

              }
              cardTitle = neckText+","+sleeveText+","+lengthText;
              
         
            
            
            const ele = '<li class="slide-item swiper-slide"><div class="card-wrp"><div class="style-card"><img class="saved-img" src="'+imageSource+'" alt="style image" /><div class="close-card" slide-id="'+ index +'"><span></span><span></span></div></div><div class="d-flex pt-2 align-items-center  " ><p class="fnt-11 w-100 pr-2">'+cardTitle+'</p><i class="share-icon icon-share mr-2"  ></i></div></div></li>'
            // $('.slide-item-wrp').append(ele)
            // if($(".slide-item").length> 4){
                swiperStyle = new Swiper('.js-style-slider', {
                    // loop: true,
                    // nextButton: '.swiper-button-next',
                    // prevButton: '.swiper-button-prev',
                    slidesPerView: 'auto',
                    paginationClickable: true,
                    spaceBetween: 20,
                    breakpoints: {
                        480: {
                            spaceBetween: 10
                        },
                        992: {
                            spaceBetween: 20
                        },
                        1200: {
                            spaceBetween: 30
                        }
                    }
                });
                // }
      
                
                swiperStyle.appendSlide(ele);
        })
        $(document).on('click','.close-card',function(){
          
          let slideIndex = parseInt($(this).attr("slide-id"))
          --slideIndex; 
          console.log(slideIndex)
          swiperStyle.removeSlide(slideIndex  );
          swiperStyle.update()
        })
        // $('.close-card').on('click',function(){
        //   alert(parseInt($(this).attr("slide-id")))
        //   let slideIndex = parseInt($(this).attr("slide-id"))
        //   swiperStyle.removeSlide(slideIndex);
        // })
        // $('.close-card span').click(function(){
        //   alert(parseInt($(this).attr("slide-id")))
        //   let slideIndex = parseInt($(this).attr("slide-id"))
        //   swiperStyle.removeSlide(slideIndex);
        // })

     })

    }
}

export default ProductDetais;