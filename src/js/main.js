import $ from "jquery";
import "@popperjs/core";
import "bootstrap/dist/js/bootstrap";
import "select2/dist/js/select2.min.js";

import { App } from "./parts/app.js";
import { Plugins } from "./parts/plugins.js";
import { Parts } from "./parts/parts.js";
import Log from "laravel-mix/src/Log.js";

// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

$(function () {
  window.windowWidth = $(window).width();
  window.windowHeight = $(window).height();

  window.isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
  window.isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
  window.isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");

  //Functions List Below

  window.app = new App();
  window.app.init();

  window.plugins = new Plugins();
  window.plugins.init();

  window.parts = new Parts();
  window.parts.init();
});

// ===========================================================================

// Select2 JS
$(document).ready(function () {
  $(".select-dropdown").select2();
  $(".product-option, .disable-search").select2({
    minimumResultsForSearch: -1,
  });
});

// fancy box
require("@fancyapps/ui/src/Fancybox/Fancybox");

// ===========================================================================

//header
$(window).scroll(function () {
  var sticky = $("header"),
    scroll = $(window).scrollTop();

  if (scroll >= 120) sticky.addClass("header-fixed");
  else sticky.removeClass("header-fixed");
});
var p = $("header");
$(".fake-header").css("height", p.innerHeight());

//mega menu script
$("[data-menu='true']").click(function () {
  var isOpen = $(this).hasClass("open");
  var siblings = $(this).parent().siblings().find(".open");
  var openedMenu = siblings.data("menu-name");
  $(openedMenu).toggleClass("show");
  siblings.removeClass("open");
  $(this).toggleClass("open");
  var megamenu = $(this).data("menu-name");
  $(megamenu).toggleClass("show");
  if (!isOpen) {
    $("body").addClass("fixed-bg");
  } else {
    $("body").removeClass("fixed-bg");
  }
});

$(".menu-bg-overlay, .menu-close").click(function () {
  $(".custom-mega-menu").removeClass("show");
  $("body").removeClass("fixed-bg");
  $(".mega-menu").removeClass("open");
  $("a[data-menu='true']").removeClass("open");
  $(".submenu").removeClass("show");
});

$(".mega-menu-back").click(function () {
  $(".custom-mega-menu").removeClass("show");
  $("body").removeClass("fixed-bg");
  $(".mega-menu").removeClass("open");
});

// Product Filter
$(document).ready(function(){
    $(".filter-trigger").click(function(){
      $("body").addClass("overflow-hidden");
    });
    $(".filter-close").click(function(){
      $(".filter-trigger").removeClass("open");
      $(".product-filter").removeClass("show");
      $("body").removeClass("fixed-bg");
      $("body").removeClass("overflow-hidden");
    });
});

// scroll offset js
var targetScriollOffset = 0;
jQuery('[data-scroll="true"]').click(function (e) {
    e.preventDefault();
    var target = jQuery(jQuery(this).attr("href"));
    targetScriollOffset = target.data("scroll-offset");
    if (typeof targetScriollOffset !== typeof undefined && targetScriollOffset !== false) {
        var position = target.offset().top - targetScriollOffset;
    } else {
        var position = target.offset().top;
    }
    jQuery("body, html").animate({
        scrollTop: position
    });
});

// tab filter js
$(document).ready(function(){
  $(".filter-tab-btn").click(function(){
      var value = $(this).attr('data-filter');

      setTimeout(() => {
        $('.team-slider').slick('setPosition');
      }, 200);

      if(value == "all")
      {
          $('.filter').show('700');
          $('.filter').parents('.slick-slide').show('700');
      }
      else
      {
          $(".filter").not('.'+value).hide('2000');
          $('.filter').not('.'+value).parents('.slick-slide').hide('2000');
          // console.log($('.filter').not('.'+value).parents('.slick-slide'));
          $('.filter').filter('.'+value).show('2000');
          $('.filter').filter('.'+value).parents('.slick-slide').show('2000');
      }

      var filterOpen = $(this).hasClass("active");

      if(filterOpen){
          $('.filter-tab-btn').removeClass('active');
      }else {
          var siblings = $('.filter-tab-nav').find(".active");
          siblings.removeClass('active');
          $(this).addClass('active');
      }
  });
});
// END tab filter js


//  read more
$("[data-job='true']").click(function(){
  $(this).toggleClass("show");
  var filter = $(this).data("job-name");
  $(filter).toggleClass("open");
});

// Step Form JS
const allPreviousButtons = document.querySelectorAll('.prev-btn')
const allNextButtons = document.querySelectorAll('.nextButton')
const steps = document.querySelectorAll('.step')
let activeStep = 0

allNextButtons.forEach(nextButton => {
    nextButton.addEventListener('click', () => {
        activeStep = activeStep + 1
        visibleActiveStep(activeStep);
        console.log(activeStep);
    })
});

allPreviousButtons.forEach(previousButton => {
    previousButton.addEventListener('click', () => {
        activeStep = activeStep - 1
        visibleActiveStep(activeStep);
        console.log(activeStep);
    })
});


const visibleActiveStep =  (active) => {
    steps.forEach((step, index) => {
        // console.log(step);
        const classes = step.classList
        if (index === active) {
            classes.add('d-block')
            classes.remove('d-none')
        } else {
            classes.remove('d-block')
            classes.add('d-none')
        }

    })
}