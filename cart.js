let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);
const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos")
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");


function cargarProductosCarrito() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoProductos.innerHTML = "";
        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img class="carrito-producto-imagen" src="${producto.image}" alt="${producto.title}">
                    <div class="carrito-producto-titulo">
                        <small>Title</small>
                        <h3>${producto.title}</h3>
                    </div>
                    <div class="carrito-producto-cantidad">
                        <small>Amount</small>
                        <p>${producto.cantidad}</p>
                    </div>
                    <div class="carrito-producto-precio">
                        <small>Price</small>
                        <p>$${producto.price}</p>
                    </div>
                    <div class="carrito-producto-subtotal">
                        <small>Subtotal</small>
                        <p>$${producto.price * producto.cantidad}</p>
                    </div>
                    <button class="normal carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash"></i></button>
                </div>
                `;
            contenedorCarritoProductos.append(div);
        })
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
    }
    actualizarBotonesEliminar();
    actualizarTotal();
}

cargarProductosCarrito();


function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    })
}

function eliminarDelCarrito(e) {
    Toastify({
        text: "Product deleted",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
            background: "linear-gradient(to right,#010202, #6e5e6f)",
            borderRadius: '1rem'
        },
        onClick: function () { } 
    }).showToast();
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

function actualizarTotal(){
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.price * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {
    Swal.fire("Thank you for your purchase!");
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
    contenedorCarritoVacio.classList.remove("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");
}