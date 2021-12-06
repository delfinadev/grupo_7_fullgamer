const { parse } = require("path/posix");

window.addEventListener("load", function() {
    let downArrow = document.querySelector(".down-arrow");
    let options = document.querySelector(".options");
    let userBlock = document.querySelector(".user");
    let numberOfProducts = document.querySelector(".products-in-cart");

    if(localStorage.productsInCart) {
        let productsInLocalStorage = JSON.parse(localStorage.getItem("productsInCart") || "[]");
            if(numberOfProducts.style.display === "block") {
                numberOfProducts.innerHTML = parseInt(numberOfProducts.innerHTML, 10) + productsInLocalStorage.length;
            } else {
                numberOfProducts.style.display = "block";
                numberOfProducts.innerHTML = productsInLocalStorage.length;
            };
    };

    if(parseInt(numberOfProducts.innerHTML, 10) === 0) {
        numberOfProducts.style.display = "none";
    };

    downArrow.addEventListener("click", function() {
        options.classList.toggle("show");

        if(options.classList.contains("show")) {
            userBlock.style.borderBottomLeftRadius = "0px";
            userBlock.style.borderBottomRightRadius = "0px";
        } else {
            userBlock.style.borderBottomLeftRadius = "10px";
            userBlock.style.borderBottomRightRadius = "10px";
        }
    });
    
});