document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.querySelector(".nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  document.querySelectorAll(".dropdown>a").forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (window.innerWidth <= 860) {
        event.preventDefault();
        link.parentElement.classList.toggle("open");
      }
    });
  });
  document.querySelectorAll("[data-tabs]").forEach(function (tabs) {
    var buttons = tabs.querySelectorAll(".tab-button");
    var panels = tabs.querySelectorAll(".tab-panel");
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        buttons.forEach(function (item) {
          item.classList.remove("active");
        });
        panels.forEach(function (panel) {
          panel.classList.remove("active");
        });
        button.classList.add("active");
        var target = tabs.querySelector("#" + button.getAttribute("data-tab"));
        if (target) target.classList.add("active");
      });
    });
  });
});
