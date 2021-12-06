window.addEventListener("load", function() {
    let carts = document.querySelectorAll(".cart");
    let imgs = document.querySelectorAll(".product-img");
    let productNames = document.querySelectorAll(".nombre-producto");
    let prices = document.querySelectorAll(".price");
    let numberOfProducts = document.querySelector(".products-in-cart");

    for(let i = 0; i < carts.length; i++) {
        carts[i].addEventListener("click", function() {
            let product = {
                id: i + 1,
                name: productNames[i].innerText,
                price: prices[i].innerHTML,
                img: imgs[i].src
            };

            if(localStorage.productsInCart) {
                let productsInLocalStorage = JSON.parse(localStorage.getItem("productsInCart") || "[]");
                console.log(productsInLocalStorage);
                let exists;
                for (let  i = 0; i < productsInLocalStorage.length; i++) {
                    if(productsInLocalStorage[i].id === product.id) {
                        exists = true;
                    }
                };
                if(exists) {
                    console.log("%cEste producto ya está en el carrito", "color: red");
                } else {
                    productsInLocalStorage.push(product);
                };
                console.log(JSON.stringify(productsInLocalStorage));
                localStorage.productsInCart = JSON.stringify(productsInLocalStorage);
                numberOfProducts.innerHTML = parseInt(numberOfProducts.innerHTML, 10) + 1;

            } else {
                let productToStore = JSON.stringify([product]);
                localStorage.setItem("productsInCart", productToStore);
                numberOfProducts.style.display = "block";
                numberOfProducts.innerHTML = 1;
            };

            //console.log("%c" + localStorage.getItem("productsInCart"), "color: blue");
            //console.log(JSON.parse(localStorage.getItem("productsInCart")));
        })
    }
})