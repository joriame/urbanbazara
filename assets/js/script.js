document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const menu = document.querySelector(".menu");
  const mobileMenu = document.getElementById("menu-mobile");

  burger.addEventListener("click", function () {
    menu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    burger.classList.toggle("active");
  });

  // Закрытие меню при клике вне его
  document.addEventListener("click", function (event) {
    if (
      !menu.contains(event.target) &&
      !burger.contains(event.target) &&
      !mobileMenu.contains(event.target)
    ) {
      menu.classList.remove("active");
      mobileMenu.classList.remove("active");
      burger.classList.remove("active");
    }
  });
});

document.querySelectorAll(".cart-button").forEach((button) => {
  button.addEventListener("click", function () {
    if (this.textContent === "В корзине") {
      window.location.href = "basket.html"; //
    } else {
      this.textContent = "В корзине";
    }
  });
});

//Анимация фото у карточки
document.querySelectorAll(".image-slider").forEach((slider) => {
  const images = slider.querySelectorAll(".card-image");

  slider.addEventListener("mousemove", (e) => {
    const rect = slider.getBoundingClientRect();
    const xPos = e.clientX - rect.left;
    const imageIndex = Math.floor((xPos / rect.width) * images.length);

    images.forEach((img, index) => {
      img.classList.toggle("active", index === imageIndex);
    });
  });

  slider.addEventListener("mouseleave", () => {
    images.forEach((img, index) => {
      img.classList.toggle("active", index === 0);
    });
  });
});

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

// Описание,Спецификации,Уход,Отзывы,FAQ
function toggleBlock(blockId) {
  const blocks = document.querySelectorAll(".description-info, .spec-info,.care-info, .faq-info,.reviews-info");

  blocks.forEach((block) => {
    if (block.id === blockId) {
      block.style.display =
        block.style.display === "none" || block.style.display === ""
          ? "block"
          : "none";
    } else {
      block.style.display = "none";
    }
  });
}

document.getElementById("showBlock1").addEventListener("click", function () {
  toggleBlock("block1");
});

document.getElementById("showBlock2").addEventListener("click", function () {
  toggleBlock("block2");
});

document.getElementById("showBlock3").addEventListener("click", function () {
  toggleBlock("block3");
});

document.getElementById("showBlock4").addEventListener("click", function () {
  toggleBlock("block4");
});

document.getElementById("showBlock5").addEventListener("click", function () {
  toggleBlock("block5");
});
