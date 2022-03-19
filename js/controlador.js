// // Utilizando el DOM
// let titulo = document.getElementById("titulo");
// titulo.textContent = "solo verde a morir";
// titulo.classList.add("text-danger");
// titulo.classList.add("text-center");

// let tituloDelMenu = document.getElementById("titulodelmenu");
// tituloDelMenu.textContent = "solo verde";

// let etiquetaFotoBatman = document.getElementById("fotobatman");
// etiquetaFotoBatman.src="img/foto4.jpg"

//importando modulos
import { pintarTienda } from "./llenandoTienda.js";
import { ampliarInformacion } from "./ampliarInfo.js";

//llamando al modulo de pintar
pintarTienda();

//Llamando al modulo ampliarInfo
let contenedorTienda = document.getElementById("fila");
contenedorTienda.addEventListener("click",function(event){
   
    if(event.target.classList.contains("btn")){
        let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
        ampliarInformacion(event);
        modalinfoproducto.show()
    }

})