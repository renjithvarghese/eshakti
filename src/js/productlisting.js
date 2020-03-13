import $ from 'jquery'
console.log('Product listing code');


// List view and grid view 

const listViewButton = document.querySelector('.list-view-btn');
const gridViewButton = document.querySelector('.grid-view-btn');
const viewList = document.querySelectorAll('.view-item');
const list = document.querySelector('.js-products');

listViewButton.addEventListener('click', () => {
   list.classList.remove('grid-item');
   list.classList.add('list-item');
 });
 
 gridViewButton.addEventListener('click', () => {
   list.classList.remove('list-item');
   list.classList.add('grid-item');
 });

 // Changing mode of the view

 const handleClickl = (ek) => {
   ek.preventDefault();
   viewList.forEach(node => {
     node.classList.remove('active');
   });
   ek.currentTarget.classList.add('active');
 }
 viewList.forEach(node => {
   node.addEventListener('click', handleClickl)
 });
 

 // Side-sticky Desktop

let styleSticky = `position:fixed;
            top:0;`
let styleRelative = `position:absolute;
            bottom:0;`;
let top = `top:0;`

let heightOfWrapper = list.scrollHeight
// console.log(heightOfWrapper)

let stickyELementwrp = document.querySelector('.product-sticky');
let stickyELement = document.querySelector('.side-filter-sticky');
let stickyELementwrpHeight = stickyELementwrp.offsetTop
let stickyHeight = stickyELement.scrollHeight
let stickyELementOffset = stickyELement.offsetHeight;
console.log(stickyELementwrpHeight)
if(window.innerWidth > 767){
   window.addEventListener("scroll", function(event) {
      var top = this.scrollY;
      console.log(top)
   
      if(top > (stickyELementwrpHeight - 80) && top <= (heightOfWrapper - stickyHeight + 400 ) ){
         stickyELement.style=styleSticky;
      }
      else {
         stickyELement.style=styleRelative;
   
      }
      if( top <stickyELementOffset-50){
         stickyELement.style=top
      }
   });

}

// Dropdon sortby

if(window.innerWidth > 767){
   window.onload = function(){
      let dropBtn = document.querySelector('.dropdown-select');
      let dropItem = document.querySelectorAll('.dropdown-menu li');
      for(const opt of dropItem){
         opt.addEventListener("click",(e)=>{
            let val = e.target.textContent;
            dropBtn.innerHTML= val
         })
      }
   };
}

// Side-filter checkbox selection and clear the selection

let checkInput = Array.from(document.querySelectorAll('.label-container input'))

Array.from(checkInput).forEach(node => {
   node.addEventListener('change', (event) => {
      let panelCard = event.target.closest(".panel-card");
      let clearButtons = panelCard.querySelector('.js-check-clear');
      let selectedCheckBoxCount = panelCard.querySelectorAll("input:checked");

      if (event.target.checked) {
         clearButtons.classList.add('active');
      }
      
      if (!selectedCheckBoxCount.length) {
         clearButtons.classList.remove('active');
      }
   })
});

//  Clearing the buttons and button as well

let clearButtons = document.querySelectorAll('.js-check-clear')
clearButtons.forEach(clearBtn => {
   clearBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      let panelCard = event.target.closest(".panel-card");
      let checkChecboxes = panelCard.querySelectorAll('.label-container input');

      checkChecboxes.forEach(checkbox => {
         checkbox.checked = false;
      })
      clearBtn.classList.remove('active');
   })
});

// Product alert
const alertContent = document.querySelector('.product-alert');
const checkbox = document.querySelectorAll('.style-check');
const clear = document.querySelector('.clear-select');

checkbox.forEach(node => {
   node.addEventListener('change', (event) => { 
      if (event.target.checked) { 
         alertContent.classList.add('class-cheked');
         // event.target.nextElementSibling.children
         // alert(event.target.nextElementSibling.children);
      }
   })
});

//Clear the selcted list

clear.addEventListener('click', (el) => { 
   checkbox.forEach(node => {
      el.stopPropagation();
      node.checked = false;
      alertContent.classList.remove('class-cheked');
   });
})

// accordian info
class Accordion {
   constructor(heading) {
      this.heading = heading;
   }   
   showAll() {
      const accordionHeading = document.querySelectorAll(this.heading);
      accordionHeading.forEach((item, key) => {
         item.addEventListener('click', (event) => {
            item.classList.contains('active') ? 
               item.classList.remove('active') :            
               item.classList.add('active');
         });
        //  console.log(item);
      });
   }
}

const accordion = new Accordion('.panel-cardtitle');
// for open every use showAll();
accordion.showAll();

// SIDE FILTERS ONLY FOR MOBILE
const filterMobile = document.querySelector('.product-filter-mob');
const filterSide = document.querySelectorAll('.side-filter');
const filterBody = document.querySelector('body');
const filterClose = document.querySelectorAll('.btn-close');
const sortBy = document.querySelector('.filter-sort');
const sortDropdown = document.querySelector('.dropdown');
const overlayDiv = document.createElement('div');
const sortClose = document.querySelector('.btn-close-sort');


filterMobile.addEventListener('click', () => {
   filterSide.forEach(node => {
      node.classList.add('active');
   })
});

filterClose.forEach(closeBtn => {
   closeBtn.addEventListener('click', () => {
      filterSide.forEach(node => {
         // event.stopPropagation();
         node.classList.remove('active');
      })
   });
});

// sort by
if(window.innerWidth < 768) { 
   sortBy.addEventListener('click', (e) => {
      e.stopPropagation();
      sortDropdown.classList.add('active');
      sortBy.before(overlayDiv);
      overlayDiv.classList.add('show');
      filterBody.classList.add('scroll');
   });
   // Sortclose
   sortClose.addEventListener('click', (e) => {
      e.stopPropagation()
      sortDropdown.classList.remove('active')
      overlayDiv.classList.remove('show');
      filterBody.classList.remove('scroll');
   });
}


// Mobile Show-products sticky
window.addEventListener("scroll", function (event) {
   var stickyFilter = document.querySelector('.products-header');
   var $target = $(stickyFilter);
   var $window = $(window);
   var docViewTop = $window.scrollTop();
   var docViewBottom = docViewTop + $window.height();
   var targetTop = $target.offset().top;
   if(docViewTop == 0) {
      stickyFilter.classList.remove('sticky-block');
   }
   else if(docViewTop >= targetTop) {
      stickyFilter.classList.add('sticky-block');
   }
});
