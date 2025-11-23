
// filter

function filterproduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() === button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
      if (value === "all") {
        element.classList.remove("hide");
      } else {
        if (element.classList.contains(value)) {
          element.classList.remove("hide");
        } else {
          element.classList.add("hide");
        }
      }
    });
}
  

// search

document.getElementById("search-input").addEventListener("input", () => {
    let searchInput = document.getElementById("search-input").value.toUpperCase();
    let cards = document.querySelectorAll(".card");
    let names = document.querySelectorAll(".product-name");

    cards.forEach((card, index) => {
        if (names[index].innerText.toUpperCase().includes(searchInput)) {
            card.classList.remove("hide");
        } else {
            card.classList.add("hide");
        }
    });
});