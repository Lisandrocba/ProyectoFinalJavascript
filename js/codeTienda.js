const btnAgregar = document.querySelectorAll(".btnAgregar");
const contenedorCartaCarrito = document.querySelector(".contenedorCompras");

btnAgregar.forEach((agregarProducto) =>{
    agregarProducto.addEventListener("click", agregarProductoClick);
});

let btnComprar = document.querySelector(".btnComprar");
btnComprar.addEventListener("click", comprarCarrito)

function agregarProductoClick (e){
    const btn = e.target;
    const item = btn.closest(".GaseosaProducto");
    
    const itemImg = item.querySelector(".imgGaseosa").src;
    const itemTipo = item.querySelector(".tipo").textContent;
    const itemDescripcion = item.querySelector(".descripcion").textContent;
    const itemPrecio = item.querySelector(".precio").textContent;

    agregarProductoAlCarrito(itemImg, itemTipo, itemDescripcion, itemPrecio);

}

function agregarProductoAlCarrito(itemImg, itemTipo, itemDescripcion, itemPrecio){

   let descripcionElemento = contenedorCartaCarrito.getElementsByClassName("descripcionCarrito")

    for(let i = 0; i<descripcionElemento.length; i++){
        if(descripcionElemento[i].innerText === itemDescripcion){
        let cantidadElementos = descripcionElemento[i].parentElement.querySelector(".cantidadProducto")
            cantidadElementos.value++;
            calcularTotal()
            return;
        }
    }

   const cartaCarrito = document.createElement("div");
   const contenidoCartaCarrito = `
            <div class="contenedorCompra">
                <img class="imgGaseosa" src=${itemImg} alt="">
                <p class="tipoCarrito">${itemTipo}</p>
                <p class="descripcionCarrito">${itemDescripcion}</p>
                <input class="cantidadProducto" type="number" value="1">
                <p class="precioCarrito">${itemPrecio}</p>
                <button class="eliminarProducto">X</button>
            </div>
   `;
   cartaCarrito.innerHTML = contenidoCartaCarrito;
   contenedorCartaCarrito.append(cartaCarrito);

   cartaCarrito.querySelector(".eliminarProducto").addEventListener("click",eliminarProducto)
   cartaCarrito.querySelector(".cantidadProducto").addEventListener("change", sumarProductos)

   calcularTotal();
}

function calcularTotal(){
    let totalCompra = 0;

    let contenedorCompra = document.querySelectorAll(".contenedorCompra");
    
    contenedorCompra.forEach((contenedorCompra) =>{
        let precioItemElemento = contenedorCompra.querySelector(".precioCarrito")
        let precioItem = Number(precioItemElemento.textContent.replace("$",""));
        
        let cantidadItemElemento = contenedorCompra.querySelector(".cantidadProducto")
        let cantidadItem = Number(cantidadItemElemento.value)

        totalCompra = totalCompra + precioItem * cantidadItem
        document.querySelector(".textTotal").innerHTML = `Total: $${totalCompra.toFixed(2)}`
    })
    
}

function eliminarProducto(e){
    const btnEliminar = e.target;
    btnEliminar.closest(".contenedorCompra").remove();
    calcularTotal()
}

function sumarProductos(e){
    const input = e.target;
    if (input.value <= 0){
        input.value = 1;
    }

    calcularTotal()
}

function comprarCarrito(){
    contenedorCartaCarrito.innerHTML = "";
    document.querySelector(".textTotal").innerHTML = "";

     
Swal.fire({
    icon: 'success',
    title: 'Compra Realizada',
    showConfirmButton: false,
    timer: 1500
  })
}