window.addEventListener("load", function() {
    let downArrow = document.querySelector(".down-arrow");
    let options = document.querySelector(".options");
    let userBlock = document.querySelector(".user");

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