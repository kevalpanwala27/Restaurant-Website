'use strict';

// Preload

// Loading will be end after the document is loaded

const preloader = document.querySelector("[data-preaload]");
window.addEventListener("load", function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});

