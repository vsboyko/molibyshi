document.addEventListener("click", (e) => {
  if (e.target.closest(".site-actions__button")) {
    let location = e.target.closest(".site-actions-block");

    // if(site-actions__button_light)

    if(!e.target.closest(".site-actions__button").classList.contains("site-actions__button_light")){
      if (
				e.target.closest(".site-actions__button").classList.contains("active")
			) {
				e.target.closest(".site-actions").classList.remove("active");
				e.target.closest(".site-actions__button").classList.remove("active");
				location
					.querySelector(".site-actions__body")
					.classList.remove("active");
			} else {
				document.querySelectorAll(".site-actions__body").forEach((el) => {
					el.classList.remove("active");
				});
				document.querySelectorAll(".site-actions__button").forEach((el) => {
					el.classList.remove("active");
				});

				e.target.closest(".site-actions").classList.add("active");
				e.target.closest(".site-actions__button").classList.toggle("active");
				location
					.querySelector(".site-actions__body")
					.classList.toggle("active");
			}
    }else{
      e.preventDefault()
    }
  }

  if (e.target.closest(".catalog__more-btn")) {
    e.target.closest(".catalog__more-btn").classList.toggle("active");
    e.target
      .closest(".catalog__category")
      .querySelector(".catalog__list")
      .classList.toggle("active");

    e.target.closest(".catalog__wrapper").classList.toggle("active");
  }


  if (e.target.closest(".call-interior-gallery")) {
    document.querySelectorAll(".catalog-gallery_interior .catalog-gallery__slide img").forEach((galleryImage) => {
			const imageSrc = galleryImage.getAttribute("data-src");
			galleryImage.setAttribute("src", imageSrc);
		});
    document.querySelector(".catalog-gallery_interior").classList.add("active");
    document.querySelector(".header-navigation").classList.add("hidden");
  }
  if (e.target.closest(".call-food-gallery")) {
    document.querySelectorAll(".catalog-gallery_food .catalog-gallery__slide img").forEach((galleryImage) => {
			const imageSrc = galleryImage.getAttribute("data-src");
			galleryImage.setAttribute("src", imageSrc);
		});
    document.querySelector(".catalog-gallery_food").classList.add("active");
    document.querySelector(".header-navigation").classList.add("hidden");
  }
  if (e.target.closest(".call-guests-gallery")) {
    document.querySelectorAll(".catalog-gallery_guests .catalog-gallery__slide img").forEach((galleryImage) => {
      const imageSrc = galleryImage.getAttribute("data-src");
      galleryImage.setAttribute("src", imageSrc);
    });
    document.querySelector(".catalog-gallery_guests").classList.add("active");
    document.querySelector(".header-navigation").classList.add("hidden");
  }
  if (e.target.closest(".js-hide-nav")) {
    document.querySelector(".header-navigation").classList.add("hidden");
  }


  if (e.target.closest(".show-catalog")) {
    document.querySelector(".catalog-frame").classList.add("active");
    document.querySelector(".header-navigation").classList.add("hidden");
  }
  if (e.target.closest(".catalog__return-btn:not(.js-btn-router):not(.js-btn-router-press)")) {
    e.target.closest(".catalog").classList.remove("active");
    document.querySelector(".header-navigation").classList.remove("hidden");
  }
  if (e.target.closest(".catalog__return-btn.js-btn-router")) {
    e.target.closest(".offers").classList.remove("current");
    document.body.classList.remove("is-offers-opened");
    document.querySelector(".header-navigation").classList.remove("hidden");
    document.querySelectorAll(".header-navigation__el").forEach((el) => {
      el.classList.remove("bronze", "header-navigation__el_current");
    });
    document.querySelectorAll(".header-navigation__el:first-child").forEach((el) => {
      el.classList.add("header-navigation__el_current");
    });
  }
  if (e.target.closest(".catalog__return-btn.js-btn-router-press")) {
    e.target.closest(".press").classList.remove("current");
    document.body.classList.remove("is-press-opened");
    document.querySelector(".header-navigation").classList.remove("hidden");
    document.querySelectorAll(".header-navigation__el").forEach((el) => {
      el.classList.remove("bronze", "header-navigation__el_current");
    });
    document.querySelectorAll(".header-navigation__el:first-child").forEach((el) => {
      el.classList.add("header-navigation__el_current");
    });
    document.querySelectorAll(".main-header__logo").forEach((page) => {
      page.classList.remove("is-hide");
    });
  }

  if (e.target.closest('.preloader')) {
    e.target.closest(".preloader").classList.add('hidden');
  }
  if (e.target.closest(".location-body__map")) {
    document.querySelector('.real-map').classList.add("active")
  }
});

window.addEventListener("load", () => {
  let today = new Date().toISOString().split("T")[0];
  document.getElementById("myDate").min = today;
});

window.setTimeout(() => {
  document.querySelector('.preloader').classList.add('hidden')
}, 12000);