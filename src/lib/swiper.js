const swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  speed: 2000,
  centeredSlides: true,
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
