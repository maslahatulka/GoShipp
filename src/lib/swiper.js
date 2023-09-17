const swiper = new Swiper(".swiper", {
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
