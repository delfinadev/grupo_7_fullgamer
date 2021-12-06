window.addEventListener("load", function() {
    let container = document.querySelector(".products-container");
    let numberOfProducts = document.querySelector(".products-in-cart");

    if(localStorage.productsInCart) {
        let products = JSON.parse(localStorage.getItem("productsInCart"));
        products.forEach(product => {
            container.innerHTML += `<div class="contenedor">
        <div class="producto">
            <div class="image-name">
                <img class="imagen" src="` + product.img + `" alt="` + product.name + `">
                <h5 class="nombre-producto">` + product.name + `</h5>
            </div>
            <div class="detalles">
                <div class="precio-cantidad"><input type="number" min="1" max="10" name="quantity"
                        class="quantity" value="1"> x <span class="price">` + product.price + `</span></div>
                <a class="verentienda" href="/products/detail/` + product.id + `">Ver en Tienda</a>
            </div>
        </div>
        <i class="fas fa-times cruz"></i>
    </div>`
        })
    } else {
        container.innerHTML = `<span class="empty">No hay ningún producto en el carrito.</span>`
    };

    let cross = document.querySelectorAll(".cruz");
    let prices = document.querySelectorAll(".price");
    let quantities = document.querySelectorAll(".quantity");
    let total = document.querySelector(".total");

    let finalTotal = 0;

    console.log(cross);
    for(let i = 0; i < cross.length; i++) {
        cross[i].addEventListener("click", function() {
            let products = JSON.parse(localStorage.getItem("productsInCart"));

            products.splice(i, 1);
            console.log(products);

            if(products !== []) {
                localStorage.productsInCart = JSON.stringify(products)
            } else {
                localStorage.removeItem("productsInCart");
            };

            numberOfProducts.innerHTML = parseInt(numberOfProducts.innerHTML, 10) + 1;

            window.location.reload();
        });
        console.log(prices[i].innerText);

        finalTotal = finalTotal + (quantities[i].value * prices[i].innerText);
    }

    total.innerHTML = `Total: $` + finalTotal;

    
});