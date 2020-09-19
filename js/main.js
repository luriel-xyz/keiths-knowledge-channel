AOS.init({
  duration: 800,
  easing: "slide",
  once: false,
});

jQuery(document).ready(function ($) {
  "use strict";

  $(".year").html(new Date().getFullYear());
});
