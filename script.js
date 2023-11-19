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
let count = 0;

button.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevents the click event from reaching the document
    if (count % 2 === 0) {
        box.classList.add("box1");
        box.classList.remove("box2");
    } else {
        box.classList.add("box2");
        box.classList.remove("box1");
    }
    count++;
});

// Add event listener to document to close the box when clicking outside
document.addEventListener('click', (event) => {
    const isClickedInsideButton = button.contains(event.target);
    const isClickedInsideBox = box.contains(event.target);
    
    if (!isClickedInsideButton && !isClickedInsideBox) {
        box.classList.add("box2");
        box.classList.remove("box1");
        count++;
    }
});

/* NOTIFICATION END */