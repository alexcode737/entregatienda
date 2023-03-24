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
import { PintarCarrito } from "./pintarcarrito.js";

//crear un objeto vacio
let producto = {};

//Mi modal
let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'));

//llamando al modulo de pintar
pintarTienda();

//Llamando al modulo ampliarInfo
let contenedorTienda = document.getElementById("fila");
contenedorTienda.addEventListener("click",function(event){
   
    if(event.target.classList.contains("btn")){
        
        producto = ampliarInformacion(event);        
        modalinfoproducto.show();
    }

})

//detectar la accion de añadir al carrito
//carrito es un arreglo de productos (un arreglo de objetos)
let carrito = []

let botonAdd = document.getElementById("botonAdd")
botonAdd.addEventListener("click",function(evento){
    //console.log("estoy añadiendo al carrito")

   
    modalinfoproducto.hide();

    //1. capturar la cantidad del producto
    let cantidad = document.getElementById("cantidadProducto").value
    
    if(cantidad != 0){
        //2. agrego la cantidad al objeto producto
        producto.cantidad = cantidad;
        producto.sTotal = cantidad * producto.precio;
        producto.total = producto.sTotal;
        //3. agregar el producto al carrito
        carrito.push(producto);
        
        //4. calculo la sumatoria de toda las cantidades
        let suma = 0;
        carrito.forEach(function(producto){
            
        suma = suma + Number(producto.cantidad);

        PintarCarrito(suma);
            
        })
        let sTotal = 0;
        carrito.forEach(function(precio){
        sTotal = sTotal + Number(producto.sTotal);
        })
    }
})

    // Limpiar carrito
    let botonLimpiar = document.getElementById("botonLimpiar")
    botonLimpiar.addEventListener("click",function(producto){
        carrito = [];
        let capsula = document.getElementById("capsula");
        capsula.textContent = 0;
        capsula.classList.add("invisible")
        let valorDolar = document.getElementById("dolares")
        valorDolar.textContent = ""; 
    })

let Resultado = 0
let dolar = 0;
//4. Ver resumen de venta
let botonCarrito = document.getElementById("carrito");
botonCarrito.addEventListener("click",function(evento){

    let modalVenta = new bootstrap.Modal(document.getElementById('resumencarrito'));    

    let container;

    if(carrito.length == 0){
        container = document.getElementById("contenedorventa");
        container.innerHTML = "";

        let row = document.createElement("div");
        row.classList.add("row");

        let column = document.createElement("div");
        column.classList.add("col-12");

        let image = document.createElement("img");
        image.classList.add("img-fluid", "w-100");
        image.src = ("../imgM/icono-carrito-compras.png");

        
        column.appendChild(image);
        row.appendChild(column);
        container.appendChild(row);

        let totalCompra = document.getElementById("total")
        totalCompra.textContent = "Agregue un producto..."

    }
    else {

    let contenedor = document.getElementById("contenedorventa");

    //borrar el contenido de una seccion html
    contenedor.innerHTML = "";


    //recorrer el carrito para pintar los productos en la factura
    carrito.forEach(function(producto){

    //traversing
    let fila = document.createElement("div");
    fila.classList.add("row");

    let columna1 = document.createElement("div");
    columna1.classList.add("col-12","col-md-4")

    let columna2 = document.createElement("div");
    columna2.classList.add("col-12","col-md-8");

    let foto = document.createElement("img");
    foto.classList.add("img-fluid","w-100");
    foto.src = producto.foto;

    let nombre = document.createElement("h2");
    nombre.classList.add("card-tittle");
    nombre.textContent = producto.nombre;

    let cantidad = document.createElement("h4");
    cantidad.classList.add("card-tittle");
    cantidad.textContent = "Cantidad: " +  producto.cantidad;

    let precio = document.createElement("h5");
    precio.classList.add("card-tittle");
    precio.textContent = "Precio: " +  producto.precio;

    let subtotal = document.createElement("h3");
    subtotal.classList.add("card-tittle");
    subtotal.textContent = "Subtotal: "+producto.sTotal;

    let division = document.createElement("p");
    division.classList.add("card-text");
    division.textContent="_______________________________________________________________________________";

    Resultado = Resultado + producto.cantidad*producto.precio;
    dolar = Resultado / 4000;
    
    //padres e hijos
    columna1.appendChild(foto);
    columna2.appendChild(nombre);
    columna2.appendChild(cantidad);
    columna2.appendChild(precio);
    columna2.appendChild(subtotal);
    columna2.appendChild(division);
    
    fila.appendChild(columna1);
    fila.appendChild(columna2);

    contenedor.appendChild(fila);
    fila.append(division);

    })
    let totalCompra = document.getElementById("total");
    totalCompra.textContent= "El total de la compra de los productos es: "+Resultado;
    
    let convertirMoneda = document.getElementById("convertidor");
    convertirMoneda.addEventListener("click",function(){
        if("convertirMoneda"){
            let precioDolar = document.getElementById("dolares");
            precioDolar.textContent = "El valor en dolares es: " + dolar.toFixed(2);
        }        
    })

    let botonComprar = document.getElementById("comprar");
    let modalCompra = new bootstrap.Modal(document.getElementById('modalcomprar'));
    botonComprar.addEventListener("click",function(){
        let textoDeExito = document.getElementById("textodeexito");
        if(Resultado > 0){
            modalCompra.show();
            textoDeExito.textContent = "!!Exito al comprar¡¡";
            setTimeout(function(){
                modalCompra.hide();
              },1500)
        }
        else{
            modalCompra.hide();
        }
    })

}
    modalVenta.show();
})

    
