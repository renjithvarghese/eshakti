
import Swiper from 'swiper';
import $ from 'jquery'
import 'bootstrap/js/src/tab'


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
            breakpoints: {
             
              768: {
                slidesPerView: 2.5,
         
              },
              1024: {
                slidesPerView: 3.5,
             
              },
            }
            
          });
          var galleryTop = new Swiper('.gallery-top', {
            spaceBetween: 10,
            effect: 'fade',
            loop:true,
            loopedSlides: 5, //looped slides should be the same
            pagination: {
              el: '.swiper-pagination-bullets',
              clickable: true,
               
            },
        
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
       
        if(window.innerWidth > 767){
          $(".style-model-content").removeClass("fade")
          
        }
        else{
          $(".style-model-content").addClass("fade")
          
        }
     })

    //Save style popup
    var SaveStyles = document.querySelector('.close-parent-modal');
    SaveStyles.addEventListener("click", function (event) {
    var SelctedSliderImage = document.querySelector('.gallery-top');
    var GetImage = SelctedSliderImage.querySelector('.swiper-slide-active');
    var SelectedImage = GetImage.style.backgroundImage.replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '');
    var NewImageConatiner = document.querySelector('.saved-styles');
    var NewpopupImage = NewImageConatiner.querySelector('.saved-styles__mainImage').setAttribute('src', SelectedImage);
    var GetCustomStyles = document.querySelector('.dynaic-slide-wrapper');
    var MainImges = GetCustomStyles.querySelectorAll('.slide-item');
    var GetRealImages = GetCustomStyles.querySelectorAll('.slide-item').length;
    var getNewsubImages = NewImageConatiner.querySelector('.saved-styles__subImages');
      var list = getNewsubImages.querySelectorAll('.slide-item').length;
      var Li = document.querySelector('.saved-styles__subImages');
      Li.innerHTML = "";
      
      for (var i=0; i<GetRealImages; i++) {
        var NewItems = MainImges[i].cloneNode(true);
        getNewsubImages.appendChild(NewItems);
        var listImages = getNewsubImages.querySelectorAll('.slide-item').length;
        var listImages2 = getNewsubImages.querySelectorAll('.slide-item');
      
        for(var x=0; x<listImages; x++) {
          listImages2[x].classList.remove("swiper-slide")
        }
      }
    setTimeout(function(){ 
      $('.bd-example-modal-lg-02').modal('show');
      }, 200);

    });


    }
}

export default ProductDetais;