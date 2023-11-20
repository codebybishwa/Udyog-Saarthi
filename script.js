var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  
});
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabcursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/* NOTIFICATION START  */
const button = document.querySelector('.button');
const box = document.querySelector('.main-box');
const opened = document.querySelector('.main1');

let count1 = 0;

button.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevents the click event from reaching the document
    if (count1 % 2 === 0) {
        opened.classList.add('box1');
        opened.classList.remove('box2');
        opened.classList.add('open');
        box.classList.add("box1");
        box.classList.remove("box2");
    } else {
        opened.classList.add('box2');
        opened.classList.remove('box1');
        opened.classList.remove('open');
        box.classList.add("box2");
        box.classList.remove("box1");
    }
    count1++;
});


document.addEventListener('click', (event) => {
    const isClickedInsideButton = button.contains(event.target);
    const isClickedInsideBox = box.contains(event.target);
    
    if (!isClickedInsideButton && !isClickedInsideBox) {
        opened.classList.remove('open');
        box.classList.add("box2");
        box.classList.remove("box1");
        count1++;
    }
});

document.addEventListener('scroll', (event) => {
  const isClickedInsideButton = button.contains(event.target);
  const isClickedInsideBox = box.contains(event.target);
  
  if (!isClickedInsideButton && !isClickedInsideBox) {
      opened.classList.add('box2');
      opened.classList.remove('box1');
      opened.classList.remove('open');
      box.classList.add("box2");
      box.classList.remove("box1");
      count1++;
  }
});

/* NOTIFICATION END */

