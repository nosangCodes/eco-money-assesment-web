function loadComponent(selector, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => (document.querySelector(selector).innerHTML = data));
}

document.addEventListener("DOMContentLoaded", function () {
  loadComponent("header", "components/navbar.html");
  loadComponent("aside", "components/sidebar.html");
  loadComponent("footer", "components/bottom-nav.html");
});
