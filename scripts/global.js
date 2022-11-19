$(document).ready(function () {

  /**Codigo para o menu (versao mobile) */

  $("#menu-icon").hide();

  if ($(window).width() < 768) {
    $("#menu-icon").show();
    $("#menu").hide();

    $("#menu-icon").click(function () {
      $("#menu").slideDown(400);
    });
    $("#exit-icon").click(function () {
      $("#menu").slideUp(400);
    });

    $("#faq").hide();
    $("#about").hide();

    $("#home").click(function () {
      $("#menu").slideUp(300);
      $("#slideshow").fadeIn(300);
      $("#faq").hide();
      $("#about").hide();

    });

    $("#about-us").click(function () {
      $("#menu").slideUp(300);
      $("#slideshow").hide();
      $("#faq").hide();
      $("#about").fadeIn(300);

    });

    $("#frequent").click(function () {
      $("#menu").slideUp(300);
      $("#slideshow").hide();
      $("#faq").fadeIn(300);
      $("#about").hide();

    });

  }

  /**Codigo para a versao laptop */
  if ($(window).width() > 767) {
    $("#faq").hide();
    $("#about").hide();

    $("#home").click(function () {
      $("#about-us").css({
        "color": "#ffffff",
        "background-color": "#d90429"
      });
      $("#home").css({
        "color": "#d90429",
        "background-color": "transparent"
      });
      $("#frequent").css({
        "color": "#ffffff",
        "background-color": "#d90429"
      });

      $("#slideshow").fadeIn(300);
      $("#faq").hide();
      $("#about").hide();

    });
    $("#about-us").click(function () {
      $("#about-us").css({
        "color": "#d90429",
        "background-color": "transparent"
      });
      $("#home").css({
        "color": "#ffffff",
        "background-color": "#d90429"
      });
      $("#frequent").css({
        "color": "#ffffff",
        "background-color": "#d90429"
      });

      $("#slideshow").hide();
      $("#faq").hide();
      $("#about").fadeIn(300);

    });
    $("#frequent").click(function () {
      $("#about-us").css({
        "color": "#ffffff",
        "background-color": "#d90429"
      });
      $("#home").css({
        "color": "#ffffff",
        "background-color": "#d90429"
      });
      $("#frequent").css({
        "color": "#d90429",
        "background-color": "transparent"
      });

      $("#slideshow").hide();
      $("#faq").fadeIn(300);
      $("#about").hide();

    });
  }
});


/**Codigo para o slide show */

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}