//se crea Array vacío para que a través de un prompt el usuario pueda agregar un producto, con su precio y la cantidad deseada. Al final, se podrá ver a través de la consola el precio total del pedido.

 

let productos = []

let acumulador = 0;

console.log(productos);

let agregarProductos = productos.push({nombre:prompt("Ingrese producto: Espejo($2500), Cubrebidones ($1500), Portamacetas($1200)"),precio:prompt("Ingrese precio"),cantidad:prompt("Ingrese cantidad")});

for(let productoEnArray of productos){
    acumulador += productoEnArray.precio * productoEnArray.cantidad
}

console.log(acumulador);

