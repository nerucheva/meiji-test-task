$(document).ready(function () {
  const burger = $("#burger");
  const navigationWrapper = $("#navigation-wrapper");
  const body = $("#body");

  burger.on("click", function () {
    if (burger.hasClass("burger-menu_active")) {
      burger.removeClass("burger-menu_active");
      navigationWrapper.removeClass("navigation-wrapper_opened");
      body.removeClass("body-overflow");
    } else {
      burger.addClass("burger-menu_active");
      navigationWrapper.addClass("navigation-wrapper_opened");
      body.addClass("body-overflow");
    }
  });
});
