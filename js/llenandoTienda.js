
export function pintarTienda(){
        //creando un arreglo de objetos
let productos = [
    {nombre:"Botas de futbol ADIDAS",precio: 450000,foto:"img/producto1.jpg",descripcion:"Botas de futbol Adidas copa mundial"},
    {nombre:"Botas de futbol ADIDAS",precio: 250000,foto:"img/producto2.jpg",descripcion:"Botas de futbol Adidas predator Edge 1FG"},
    {nombre:"Botas de futbol NIKE",precio: 370000,foto:"img/producto3.jpg",descripcion:"Botas de futbol Nike mercurial superfly VIII pro FG"},
    {nombre:"Botas de futbol NIKE",precio:150000,foto:"img/producto4.jpg",descripcion:"Botas de futbol Nike phantom GT academy dynamic fit FG/MG"},
    {nombre:"Balon de futbol ADIDAS",precio: 120000,foto:"img/producto5.jpg",descripcion:" Adidas Balón Fútbol Ekstraklasa Pro"},
    {nombre:"Balon de futbol NIKE",precio: 130000,foto:"img/producto6.jpg",descripcion:"Balon de futbol Nike Pelota Kylian Mbappé Pitch"},
    {nombre:"Guantes de portero PUMA",precio: 265000,foto:"img/producto7.jpg",descripcion:"Guantes de portero Puma Ultra Grip 1 HY"},
    {nombre:"Guantes de portero ADIDAS",precio: 335000,foto:"img/producto8.jpg",descripcion:"Guantes de portero Adidas predator match"},
    {nombre:"Camisa del Liverpool",precio: 210000,foto:"img/producto9.jpg",descripcion:"Camisa de futbol  Liverpool FC Stadium Primera Equipación 21/22"},
    {nombre:"Camisa del Mancheter City",precio: 80000,foto:"img/producto10.jpg",descripcion:"Camisa de futbol Manchester City FC Primera Equipación 21/22 "},
    
]

//creo la referencia al componente padre(creo una variable para almacenar la base sobre la cual voy a pintar)
let fila = document.getElementById("fila");


//recorriendo un arreglo con js (seleccionar,buscar,esculcar en los elementos del arreglo)
productos.forEach(function(producto){
    //console.log(producto.nombre)
    //console.log(producto.precio)
    // console.log(producto.foto)
    //reseta para pintar con js
    //paso 1. comience a crear la estructura que necesita

    //aqui creo la columna
    let columna = document.createElement("div");
    columna.classList.add("col");

    //aqui creo la tarjeta
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card");
    tarjeta.classList.add("h-100");

    //creo la imagen
    let foto = document.createElement("img");
    foto.classList.add("card-img-top");
    foto.src=producto.foto;

    //creo el cuerpo de la tarjeta(la informacion que tiene la tarjeta) 
    let cuerpoDeTarjeta = document.createElement("div");
    cuerpoDeTarjeta.classList.add("card-body");
       
    //creo el nombre
    let nombreProducto = document.createElement("h2");
    nombreProducto.classList.add("card-title");
    nombreProducto.textContent = producto.nombre;

    //creando el precio
    let precioProducto = document.createElement("h4");
    precioProducto.textContent = producto.precio;

    //creo la descripción
    let descripcionProducto = document.createElement("p");
    descripcionProducto.classList.add("card-text")
    descripcionProducto.textContent = producto.descripcion

    //creo el boton
    let botonInformacion = document.createElement("button");
    botonInformacion.setAttribute("type","button");
    botonInformacion.classList.add("btn","btn-primary","mx-4","mt-3");
    botonInformacion.textContent = "ver producto"
  

    //paso 2. ordenar la estructura (padres e hijos)

    tarjeta.appendChild(foto);
    
    cuerpoDeTarjeta.appendChild(nombreProducto);
    cuerpoDeTarjeta.appendChild(descripcionProducto); 
    cuerpoDeTarjeta.appendChild(precioProducto) 
    cuerpoDeTarjeta.appendChild(botonInformacion);  
    tarjeta.appendChild(cuerpoDeTarjeta);
    columna.appendChild(tarjeta)
    fila.appendChild(columna);
})



}


// //escuchando clic en el boton
// let boton = document.getElementById("boton");

// //Detectando el primer evento
// boton.addEventListener("click",cambiarFoto)

// //creando una funcion para el boton
// function cambiarFoto(){
//     let foto = document.getElementById("fotoprueba");
//     foto.src="../img/producto1.jpg"
// }
