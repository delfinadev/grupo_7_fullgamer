window.addEventListener("load", function() {
    let passwords = document.querySelectorAll(".password");
    let toggles = document.querySelectorAll(".toggle-password");

    console.log(passwords[0]);
    console.log(toggles[0]);

    for(let i = 0; i < toggles.length; i++) {
        toggles[i].addEventListener("click", function (e) {
            e.preventDefault();

            if(passwords[i].type === "password"){
                passwords[i].type = "text";
            } else {
                passwords[i].type = "password";
            };

            this.classList.toggle("visibility");
            this.classList.toggle("no-visibility");

        })
    }
});