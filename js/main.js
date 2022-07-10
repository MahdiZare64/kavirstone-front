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

      const cartBtn = document.querySelector(".cart-btn");
      cartBtn.addEventListener("click", function () {
        document.querySelector("body").classList.add("blured");
        document.querySelector(".side-cart").classList.add("active-cart");
      });

      const closeCart = document.querySelector(".close-cart");
      closeCart.addEventListener("click", function () {
        document.querySelector("body").classList.remove("blured");
        document.querySelector(".side-cart").classList.remove("active-cart");
      });
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
          document
            .querySelector(".header__main__sm")
            .classList.toggle("active");
          document.querySelector("body").classList.toggle("blured");
        });
      });
    }
  } catch (e) {
    console.log(`Error on kavirStone.menu.init - ${e}`);
  }
};

$(function () {
  kavirStone.menu.init();
});
