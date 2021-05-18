// Для добавления функционала используем классы с префиксом js, стилизовать по этим классам нельзя

$(document).ready(function () {
  // $('input[type=tel]')
  //   .inputmask("8 (999) 999 99 99");
  // $('.js-popup-img')
  //   .magnificPopup({
  //     type:'image',
  //     closeOnContentClick: true,
  //     fixedContentPos: true,
  //     mainClass: 'mfp-no-margins mfp-with-zoom',
  //     image: {
  //       verticalFit: true
  //     },
  //     zoom: {
  //       enabled: true,
  //       duration: 300
  //     }
  //   });
});

const burger = document.getElementById("burger");
const navigationWrapper = document.getElementById("navigation-wrapper");

burger.addEventListener("click", () => {
  if (burger.classList.contains("burger-menu_active")) {
    burger.classList.remove("burger-menu_active");
    navigationWrapper.classList.remove("navigation-wrapper_opened");
  } else {
    burger.classList.add("burger-menu_active");
    navigationWrapper.classList.add("navigation-wrapper_opened");
  }
});
