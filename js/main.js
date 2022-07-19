var kavirStone = kavirStone || {};

kavirStone.menu = kavirStone.menu || {};
kavirStone.menu.init = function () {
  try {
    const header = document.querySelector(".header__main");

    if (header) {
      window.addEventListener(
        "scroll",
        function () {
          var st = window.pageYOffset || document.documentElement.scrollTop;
          if (st > 200) {
            if (!header.classList.contains("show")) {
              header.classList.add("fixed");

              setTimeout(function () {
                header.classList.add("show");
              }, 100);
            }
          } else {
            if (header.classList.contains("fixed")) {
              header.classList.remove("show");
              setTimeout(function () {
                header.classList.remove("fixed");
              }, 100);
            }
          }
        },
        false
      );
    }

    const smallLists = document.querySelectorAll(".has-children-sm");

    if (smallLists.length) {
      smallLists.forEach(function (item) {
        item.addEventListener("click", function () {
          item.classList.toggle("active");
        });
      });
    }

    const toggleMenu = document.querySelectorAll(".toggle-side-menu");

    if (toggleMenu.length) {
      toggleMenu.forEach(function (item) {
        item.addEventListener("click", function () {
          const menu = document.querySelector(".header__main__sm");
          const body = document.querySelector("body");
          const btn = document.querySelector(".header__main__menu .toggle");

          menu.classList.toggle("active");
          body.classList.toggle("blured");
          btn.classList.toggle("active");
        });
      });
    }
  } catch (e) {
    console.log(`Error on kavirStone.menu.init - ${e}`);
  }
};

kavirStone.lightGallery = kavirStone.lightGallery || {};
kavirStone.lightGallery.init = function () {
  try {
    const gallery = document.getElementById("gallery-wrapper");

    if (gallery) {
      lightGallery(gallery, {
        selector: "a",
      });
    }
  } catch (e) {
    console.log(`Error on kavirStone.lightGallery.init - ${e}`);
  }
};

$(function () {
  kavirStone.menu.init();
  kavirStone.lightGallery.init();
});
