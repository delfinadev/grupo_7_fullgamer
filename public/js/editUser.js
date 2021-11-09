window.addEventListener("load", function() {
    let form = document.querySelector("#form");
    let inputs = document.querySelectorAll(".input");
    let pencils = document.querySelectorAll(".pencil");

    for(let i = 0; i < pencils.length; i++) {
        pencils[i].addEventListener("click", function() {
            pencils[i].classList.toggle("fa-pen");
            pencils[i].classList.toggle("fa-check");

            if(inputs[i].disabled === true) {
                inputs[i].disabled = false;
                inputs[i].style.backgroundColor = "#323232";
            } else {
                inputs[i].disabled = true;
                inputs[i].style.backgroundColor = "rgb(83, 83, 83)";
            };
            
        });
    }

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        inputs.forEach(input => {
            input.disabled = false;
            input.readOnly = true;
        });

        form.submit();
    })
})