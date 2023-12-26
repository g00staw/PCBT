document.addEventListener("DOMContentLoaded", function () {
    // Poczekaj chwilę przed rozpoczęciem animacji
    setTimeout(function () {
      document.getElementById("searchText").classList.add("loaded");
    }, 500);
  });

  const selectElement = (element) => document.querySelector(element);

  selectElement('.mobile-menu').addEventListener('click',() => {
    selectElement('header').classList.toggle('active');
  });