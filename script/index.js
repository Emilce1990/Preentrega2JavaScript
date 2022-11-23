const productos = [];


class Producto{
    constructor(){
        this.id = productos.length * 100;
        this.nombre = prompt('Ingresar nombre del producto');
        this.precio = parseInt(prompt('Ingresar precio del producto'));
        this.cantidad = parseFloat(prompt('Ingresar cantidad del producto'));
    }
}


const crearProducto = () => {
    const productoInstanciado = new Producto();
    productos.push(productoInstanciado);
}


const mostrarProductos = () => {
        
    let acumuladorProductos = '';

    productos.forEach((producto) => {
        console.log(producto)
        
        acumuladorProductos += `
        <div class="container"> 
         
                <h3>Nombre: ${producto.nombre}</h3>
                <h3>Precio: ${producto.precio}</h3>
                <h3>Cantidad: ${producto.cantidad}</h3>

        </div>
        `

        document.getElementById("container").innerHTML = acumuladorProductos;
    })

}

let opciones;

const pedirOpciones = () =>{
    return opciones = parseInt(prompt('Ingresar 1 para agregar productos \nIngresar 2 para mostrar los productos \nIngresar 0 para salir \n'));
}


pedirOpciones();

const menu = (opcion) =>{
    switch (opcion){
        case 1:
                crearProducto();
        break;
        
        case 2:
                mostrarProductos();
        break;

        case 0: 
        break;

        case 'default':  pedirOpciones();
        break;

        pedirOpciones();
    }

}


while (opciones !== 0)
{
    menu(opciones);
    pedirOpciones();
}

if (opciones === 0) alert('Gracias por usar nuestra aplicacion.');