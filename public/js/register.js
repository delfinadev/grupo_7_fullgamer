window.addEventListener("load", function() {
    let form = document.querySelector("#formulario");
    let usuario = document.querySelector("#usuario");
    let email = document.querySelector("#email");
    let password1 = document.querySelector("#password1");
    let password2 = document.querySelector("#password2");
    let image = document.querySelector("#image");
    let feedback = document.querySelectorAll(".feedback");
    let crossbones = document.querySelectorAll(".crossbones");

    console.log(image);

    usuario.addEventListener("blur", function() {
        if(usuario.value.length <= 0) {
            crossbones[0].style.display = "block";
            feedback[0].innerHTML = "Debes ingresar un usuario";
        } else if (usuario.value.length < 8) {
            crossbones[0].style.display = "block";
            feedback[0].innerHTML = "Tu usuario debe tener al menos 8 caracteres";
        } else {
            crossbones[0].style.display = "none";
            feedback[0].innerHTML = "";
        }
    });

    email.addEventListener("blur", function() {
        if(email.value.length <= 0) {
            crossbones[1].style.display = "block";
            feedback[1].innerHTML = "Debes ingresar un correo electrónico";
        } else if (/\b[a-z0-9-_.]+@[a-z0-9-_.]+(\.[a-z0-9]+)+/i.test(email.value) !== true) {
            crossbones[1].style.display = "block";
            feedback[1].innerHTML = "Debes ingresar un email válido";
        } else {
            crossbones[1].style.display = "none";
            feedback[1].innerHTML = "";
        }
    });

    password1.addEventListener("blur", function() {
        if(password1.value.length <= 0) {
            crossbones[2].style.display = "block";
            feedback[2].innerHTML = "Debes ingresar una contraseña";
        } else if(password1.value.length < 8 | password1.value.length > 12) {
            crossbones[2].style.display = "block";
            feedback[2].innerHTML = "La contraseña debe tener entre 8 a 12 caracteres";
        } else if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/.test(password1.value) !== true) {
            crossbones[2].style.display = "block";
            feedback[2].innerHTML = "La contraseña debe contener al menos una mayúscula, una minúscula, un número y un caracter especial";
        } else {
            crossbones[2].style.display = "none";
            feedback[2].innerHTML = "";
        };
    });

    password2.addEventListener("blur", function() {
        if(password2.value.length <= 0) {
            crossbones[3].style.display = "block";
            feedback[3].innerHTML = "Debes volver a ingresar la contraseña";
        } else if(password2.value !== password1.value) {
            crossbones[3].style.display = "block";
            feedback[3].innerHTML = "Las contraseñas deben coincidir";
        } else {
            crossbones[3].style.display = "none";
            feedback[3].innerHTML = "";
        };
    });

    image.addEventListener("change", function() {
        let file = image.files[0];
        let fileType = file['type'];
        let validImageTypes = ['image/gif', 'image/jpeg', 'image/png', 'image/svg'];

        if (!validImageTypes.includes(fileType)) {
            crossbones[4].style.display = "block";
            feedback[4].innerHTML = "La imagen debe ser un archivo jpg, png, gif o svg";
        } else {
            crossbones[4].style.display = "none";
            feedback[4].innerHTML = "";
        };
    });
    
})