import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let botonregistro = document.getElementById("botonregistro");
let modalInformativo = new bootstrap.Modal(document.getElementById('modalinformativo'));
let usuarioAvatar = document.getElementById("ulavatar");
let avatar = document.getElementById("avatar");
botonregistro.addEventListener("click", function(evento){
    evento.preventDefault()

    let correo = document.getElementById("correo").value;
    let contraseña = document.getElementById("password").value;


            const auth = getAuth();
             createUserWithEmailAndPassword(auth, correo, contraseña)
             .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                
                // ...
                usuarioAvatar.classList.remove("invisible");
                usuarioAvatar.classList.add("text-light")
                avatar.innerHTML = `${correo} <i class="bi bi-person-bounding-box" id="diseñoIcono"></i>`;
                let textoInformativo = document.getElementById("informaciongeneral");
                let formulario = document.getElementById("formularioregistro");
                formulario.reset();
                textoInformativo.textContent = "Exito al registrar";
                modalInformativo.show();
                setTimeout(function(){
                  modalInformativo.hide();
                },2000)
                
                // avatar.classList.add("img-fluid", "ml-auto", "");
            })
             .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                let textoInformativo = document.getElementById("informaciongeneral");
                textoInformativo.textContent = "Falla: " + errorMessage;
                modalInformativo.show();
             });
})