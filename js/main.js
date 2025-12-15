/*-----------------------------------------------------------------------------------

    Theme Name: Security - CCTV & Security HTML Template
    Description: CCTV & Security HTML Template
    Author: Chitrakoot Web
    Version: 1.0
    
    ---------------------------------- */

!(function (t) {
  "use strict";
  var i = t(window);
  t("#preloader").fadeOut("normall", function () {
    t(this).remove();
  }),
    i.on("scroll", function () {
      var e = i.scrollTop(),
        a = t(".navbar-brand img"),
        o = t(".navbar-brand.logodefault img"),
        s = t(".navbar-brand.dark img");
      e <= 50
        ? (t("header").removeClass("scrollHeader").addClass("fixedHeader"),
          a.attr("src", "img/logos/logoo-inner.png"))
        : (t("header").removeClass("fixedHeader").addClass("scrollHeader"),
          a.attr("src", "img/logos/logoo.png")),
        o.attr("src", "img/logos/logoo.png"),
        s.attr("src", "img/logos/logoo.png");
    }),
    i.on("scroll", function () {
      500 < t(this).scrollTop()
        ? t(".scroll-to-top").fadeIn(400)
        : t(".scroll-to-top").fadeOut(400);
    }),
    t(".scroll-to-top").on("click", function (e) {
      e.preventDefault(), t("html, body").animate({ scrollTop: 0 }, 600);
    }),
    t(".parallax,.bg-img").each(function (e) {
      t(this).attr("data-background") &&
        t(this).css(
          "background-image",
          "url(" + t(this).data("background") + ")"
        );
    }),
    t(".story-video").magnificPopup({ delegate: ".video", type: "iframe" }),
    t(".popup-social-video").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: !1,
      fixedContentPos: !1,
    }),
    t(".source-modal").magnificPopup({
      type: "inline",
      mainClass: "mfp-fade",
      removalDelay: 160,
    }),
    0 !== t(".copy-clipboard").length &&
      (new ClipboardJS(".copy-clipboard"),
      t(".copy-clipboard").on("click", function () {
        var e = t(this);
        e.text();
        e.text("Copied"),
          setTimeout(function () {
            e.text("Copy");
          }, 2e3);
      })),
    new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: !1,
      live: !0,
    }).init(),
    t(document).ready(function () {
      t(".service-carousel").owlCarousel({
        center: !1,
        items: 2,
        loop: !0,
        dots: !1,
        margin: 0,
        autoplay: !0,
        autoplayTimeout: 5e3,
        smartSpeed: 900,
        responsive: {
          0: { items: 1 },
          768: { items: 2, center: !1 },
          1200: { items: 3, center: !1 },
          1400: { items: 3 },
        },
      }),
        t(".testimonial-style1").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          nav: !0,
          navText: [
            "<i class='ti-arrow-left'></i>",
            "<i class='ti-arrow-right'></i>",
          ],
          dots: !1,
          margin: 0,
          autoplay: !0,
          thumbs: !0,
          thumbsPrerendered: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 800,
          responsive: {
            0: { items: 1, nav: !1 },
            600: { items: 1, nav: !1 },
            768: { items: 1 },
          },
        }),
        t(".testimonial-carousel1").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          nav: !1,
          navText: [
            "<i class='fas fa-arrow-left'></i>",
            "<i class='fas fa-arrow-right'></i>",
          ],
          dots: !1,
          margin: 20,
          autoplay: !0,
          thumbs: !0,
          thumbsPrerendered: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 800,
          responsive: {
            0: { items: 1, nav: !1 },
            600: { items: 1, nav: !1 },
            1e3: { items: 1 },
          },
        }),
        t(".testimonial-carousel2").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          nav: !1,
          navText: [
            "<i class='fas fa-arrow-left'></i>",
            "<i class='fas fa-arrow-right'></i>",
          ],
          dots: !1,
          margin: 30,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 800,
          responsive: { 0: { items: 1 }, 992: { items: 2 }, 1e3: { items: 2 } },
        }),
        t(".portfolio-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          center: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !1,
          margin: 20,
          responsive: {
            0: { items: 1 },
            576: { items: 2 },
            992: { items: 3 },
            1200: { items: 4 },
          },
        }),
        t(".portfolio-carousel-02").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          center: !1,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !0,
          navText: [
            "<i class='ti-arrow-left'></i>",
            "<i class='ti-arrow-right'></i>",
          ],
          dots: !1,
          margin: 30,
          responsive: {
            0: { items: 1, nav: !1 },
            768: { items: 2 },
            992: { items: 3 },
            1200: { items: 3 },
          },
        }),
        t(".project-detail-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          smartSpeed: 900,
          nav: !1,
          dots: !0,
          center: !1,
          margin: 30,
          responsive: {
            0: { items: 1 },
            576: { items: 2, margin: 15 },
            768: { items: 2, margin: 15 },
            992: { items: 3 },
          },
        }),
        t(".client-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          smartSpeed: 1500,
          nav: !1,
          dots: !1,
          center: !1,
          margin: 0,
          responsive: { 0: { items: 1 }, 768: { items: 1 }, 992: { items: 1 } },
        }),
        t(".slider-fade1").owlCarousel({
          items: 1,
          loop: !0,
          dots: !0,
          margin: 0,
          nav: !1,
          navText: [
            "<i class='ti-angle-left'></i>",
            "<i class='ti-angle-right'></i>",
          ],
          autoplay: !0,
          smartSpeed: 1500,
          mouseDrag: !1,
          animateIn: "fadeIn",
          animateOut: "fadeOut",
          responsive: { 992: { nav: !0, dots: !1 } },
        }),
        t(".slider-fade2").owlCarousel({
          items: 1,
          loop: !0,
          dots: !0,
          margin: 0,
          nav: !1,
          navText: [
            "<i class='ti-angle-left'></i>",
            "<i class='ti-angle-right'></i>",
          ],
          autoplay: !0,
          smartSpeed: 1500,
          mouseDrag: !1,
          animateIn: "fadeIn",
          animateOut: "fadeOut",
          responsive: { 992: { nav: !1, dots: !0 } },
        }),
        t(".owl-carousel").owlCarousel({
          items: 1,
          loop: !0,
          dots: !1,
          margin: 0,
          autoplay: !0,
          smartSpeed: 500,
        }),
        t(".slider-fade1").on("changed.owl.carousel", function (e) {
          e = e.item.index - 2;
          t("span").removeClass("animated fadeInUp"),
            t("h1").removeClass("animated fadeInUp"),
            t("p").removeClass("animated fadeInUp"),
            t("a").removeClass("animated fadeInUp"),
            t(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("span")
              .addClass("animated fadeInUp"),
            t(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("h1")
              .addClass("animated fadeInUp"),
            t(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("p")
              .addClass("animated fadeInUp"),
            t(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("a")
              .addClass("animated fadeInUp");
        }),
        t(".slider-fade2").on("changed.owl.carousel", function (e) {
          e = e.item.index - 2;
          t("span").removeClass("animated fadeInUp"),
            t("h1").removeClass("animated fadeInUp"),
            t("p").removeClass("animated fadeInUp"),
            t("a").removeClass("animated fadeInUp"),
            t(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("span")
              .addClass("animated fadeInUp"),
            t(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("h1")
              .addClass("animated fadeInUp"),
            t(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("p")
              .addClass("animated fadeInUp"),
            t(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("a")
              .addClass("animated fadeInUp");
        }),
        t(".countup").counterUp({ delay: 25, time: 2e3 }),
        t(".countdown").countdown({
          date: "01 Aug 2024 00:01:00",
          format: "on",
        }),
        t(".current-year").text(new Date().getFullYear());
    }),
    i.on("load", function () {
      t(".portfolio-gallery").lightGallery(),
        t(".portfolio-link").on("click", (e) => {
          e.stopPropagation();
        }),
        i.stellar();
    });
})(jQuery);
