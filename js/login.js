"use strict";

//---Вход--->

const loginLink = document.querySelector(".header-bottom__login-link");
const loginPopup = document.querySelector(".modal-login");
const loginClose = loginPopup.querySelector(".modal-close");
const loginForm = loginPopup.querySelector(".login-form");
const loginUser = loginPopup.querySelector(".login-user");
const loginPasswordUser = loginPopup.querySelector(".login-password-user");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

loginLink.addEventListener("click", (evt) => {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");
  if (storage) {
    loginUser.value = storage;
    loginPasswordUser.focus();
  } else {
    loginUser.focus();
  }
});

loginClose.addEventListener("click", (evt) => {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
  loginPopup.classList.remove("modal-error");
});

window.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    if (loginPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-show");
      loginPopup.classList.remove("modal-error");
    }
  }
});

loginForm.addEventListener("submit", (evt) => {
  if (!loginUser.value || !loginPasswordUser.value) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-error");
    loginPopup.offsetWidth;
    loginPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", loginUser.value);
    }
  }
});


//---Регистрация--->

const registrLink = document.querySelector(".header-bottom__registration-link");
const registrPopup = document.querySelector(".modal-registration");
const registrClose = registrPopup.querySelector(".modal-close");
const registrForm = registrPopup.querySelector(".registration-form");
const registrLogin = registrPopup.querySelector(".registration-login");
const registrPassword = registrPopup.querySelector(".registration-password");

registrLink.addEventListener("click", (evt) => {
  evt.preventDefault();
  registrPopup.classList.add("modal-show");
});

registrClose.addEventListener("click", (evt) => {
  evt.preventDefault();
  registrPopup.classList.remove("modal-show");
  registrPopup.classList.remove("modal-error");
});

window.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    if (registrPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      registrPopup.classList.remove("modal-show");
      registrPopup.classList.remove("modal-error");
    }
  }
});

registrForm.addEventListener("submit", (evt) => {
  if (!registrLogin.value || !registrPassword.value) {
    evt.preventDefault();
    registrPopup.classList.remove("modal-error");
    registrPopup.offsetWidth;
    registrPopup.classList.add("modal-error");
  }
});


//---Корзина--->

const addIntoCarts = document.querySelectorAll(".add-into-cart");
const cartPopup = document.querySelector(".modal-cart");
const cartClose = cartPopup.querySelector(".modal-close");

const watches = document.querySelectorAll(".watch");
const goOnBuying = cartPopup.querySelector(".go-on-buying");

goOnBuying.addEventListener("click", (evt) => {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

const mediaQuery = window.matchMedia("(min-width: 1025px)");

function displaySize(e) {
  if (e.matches) {
    console.log("!!!");

    for (let addIntoCart of addIntoCarts) {

      addIntoCart.addEventListener("click", (evt) => {
        evt.preventDefault();
        cartPopup.classList.add("modal-show");
      });
    }

    cartClose.addEventListener("click", (evt) => {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    });

    window.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        if (cartPopup.classList.contains("modal-show")) {
          evt.preventDefault();
          cartPopup.classList.remove("modal-show");
        }
      }
    });
  } else {
    console.log("Alternative");

    for (let watch of watches) {
      watch.addEventListener("click", (evt) => {
        evt.preventDefault();        
        cartPopup.classList.add("modal-show");
      });

      cartClose.addEventListener("click", (evt) => {
        evt.preventDefault();
        cartPopup.classList.remove("modal-show");
      });
    }
  }
}
mediaQuery.addListener(displaySize);
displaySize(mediaQuery);









//-------------Menu---------------->
const menu = document.querySelector(".header-top__menu");
const siteNav = document.querySelector(".header-top__site-navigation");

menu.addEventListener("click", (evt) => {
  evt.preventDefault();

  siteNav.classList.toggle("appear");
});


//----------Info-categories-------//
const categoriesList = document.querySelector(".categories__list");
const bird = document.querySelector(".categories__switch");
bird.addEventListener("click", (evt) => {
  evt.preventDefault();
  console.log("!!!");

  categoriesList.classList.toggle("show");
  bird.classList.toggle("turn");
});