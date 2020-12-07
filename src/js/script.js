$(document).ready(function () {
  const PageMain = $(".js-page-main");
  const PageFooter = $(".js-page-footer");
  const BurgerMenuBtn = $(".js-burger-icon");
  const NavHeaderMenu = $(".js-nav-menu");
  const HideMobmenuBtn = $(".js-hide-mobmenu");
  const HeaderMenu = $(".js-header-menu");
  const HeaderSocialList = $(".js-social-list");
  const HeaderShopingCart = $(".js-shoping-cart");
  const ShopFilters = $(".js-shop-filter");
  const ShopProducts = $(".js-shop-product");

  const SwiperForSales = $(".js-swiper").length ? new Swiper('.js-swiper', {
    slidesPerView: "auto",
    centerInsufficientSlides: true,
    spaceBetween: 32,
    slidesOffsetAfter: 16,
    slidesOffsetBefore: 16,
    breakpoints: {
      992: {
        slidesOffsetBefore: 130
      }
    }
  }) : null;

  const SwiperForInspiration = $(".js-inspiration-swiper").length ? new Swiper('.js-inspiration-swiper', {
    slidesPerView: "auto",
    observer: true,
    observeParents: true,
    spaceBetween: 14,
    slidesOffsetAfter: 14,
    breakpoints: {
      992: {
        direction: "vertical"
      }
    }
  }) : null;

  let SwiperForShopFilters = $(".js-shop-filters-swiper").length ? new Swiper('.js-shop-filters-swiper', {
    slidesPerView: "auto",
    spaceBetween: 16,
  }) : null;

  let SwiperSaleList = $(".js-salelist-swiper").length ? new Swiper('.js-salelist-swiper', {
    slidesPerView: "auto",
    spaceBetween: 25,
    autoHeight: true,
    centerInsufficientSlides: true,
    breakpoints: {
      992: {
        spaceBetween: 30,
      }
    }
  }) : null;

  if ($(window).scrollTop() >= HeaderMenu.height()) {
    HeaderMenu.addClass("page-header--bg-white");

    HeaderSocialList.removeClass("page-header__social-list--dark");
    HeaderShopingCart.removeClass("shoping-cart--dark");
  } else {
    HeaderMenu.removeClass("page-header--bg-white");

    HeaderSocialList.addClass("page-header__social-list--dark");
    HeaderShopingCart.addClass("shoping-cart--dark");
  }

  $(window).scroll(function (evt) {
    if ($(window).scrollTop() >= HeaderMenu.height()) {
      HeaderMenu.addClass("page-header--bg-white");

      HeaderSocialList.removeClass("page-header__social-list--dark");
      HeaderShopingCart.removeClass("shoping-cart--dark");
    } else {
      HeaderMenu.removeClass("page-header--bg-white");

      HeaderSocialList.addClass("page-header__social-list--dark");
      HeaderShopingCart.addClass("shoping-cart--dark");
    }
  });

  [BurgerMenuBtn, HideMobmenuBtn].forEach(function (item) {
    item.on("click", function (evt) {
      let cEvt = evt.currentTarget;
      // let tEvt = evt.target;

      NavHeaderMenu.toggleClass("page-header__nav--show");

      if (cEvt.tagName === "DIV") {
        setTimeout(function () {
          PageMain.toggle();
          PageFooter.toggle();
        }, 300);
      } else if (cEvt.tagName === "LI") {
        PageMain.toggle();
        PageFooter.toggle();
      }
    });
  });

  function removeClassShopFilters(obj) {
    obj.each(function (_, elm) {
      if ($(elm).hasClass("page-shop__filter-text--active")) {
        $(elm).removeClass("page-shop__filter-text--active");
      }
    });
  };

  ShopFilters.on("click", function (evt) {
    let elm = $(evt.currentTarget);
    let filterKey = elm.data("filterkey");

    removeClassShopFilters(ShopFilters);
    elm.addClass("page-shop__filter-text--active");

    ShopProducts.each(function (_, prod) {
      let filterId = $(prod).data("filterid");

      if (filterKey === filterId) {
        $(prod).show();
      } else {
        $(prod).hide();
      }

      if (filterKey === 0) {
        $(prod).show();
      }
    });
  });

});