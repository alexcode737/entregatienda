let nombreProducto = "batimovil a escala";
let precioProducto = 450000;
let descripcionDeProducto = "Batimovil original de la pelicula";
let aplicaDescuento = true;

//arreglo tradicional en js
let nombresProductos = ["batimovil","camiseta de batman"];
let preciosProductos = [450000,70000];

//imprimiendo un arreglo
console.log(nombresProductos);
//imprimir un arreglo por su indice(uno a la vez)
console.log(nombresProductos[0]);


// creando un objeto en js
let producto = {
    nombre:"batimovil",
    precio:450000,
    descripcion:"Batimovil original de la pelicula",
    amigos: ["robin","catwoman"]
}

//imprimiendo un objeto
console.log(producto);
//imprimiendo un solo atributo de un objeto
console.log(producto.nombre);
//imprimir un dato del array que esta dentro de un objeto
console.log(producto.amigos[1]);