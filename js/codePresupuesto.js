let nombre = $("#nombreApellido");
let cantidadDias = $("#cantidadDias");
let cantidadMeses = $("#cantidadMeses");



$(".btnCalcular").click((e)=>{
    let totalMes = 4 * (cantidadDias.val() *400);
    let total = 0;
    let descuento = 0;

    if(cantidadMeses.val()<3){
        total = totalMes;
    }
    else if (cantidadMeses.val() < 6){
        total = totalMes - totalMes * 0.05;
        descuento = "5%";
    }
    else if (cantidadMeses.val() < 12){
        total = totalMes - totalMes * 0.10;
        descuento = "10%";
    }
    else if (cantidadMeses.val() >= 12){
        total = totalMes - totalMes * 0.40;
        descuento = "40%";
    }
    else{
        alert ("Verifique los datos ingresados")
    }

    
    let calculoTotal = total*cantidadMeses.val();

    $(".contenedorFormularioHecho").html("");
    $(".contenedorFormularioHecho").prepend(`
    
    <div class="conteSaludo" id="mostrarNombreApellido">${nombre.val()}</div>
    <div class="contenedorFila">
        <p>Precio por mes:</p>
        <div id="calculoDiasImp">${total}</div>
    </div>
    <div class="contenedorFila">
        <p>Descuento:</p>
        <div id="calculoDescuentoImp">${descuento}</div>
    </div>
    <div class="contenedorFila">
        <p>Total:</p>
        <div id="calculoTotal">${calculoTotal}</div>
    </div>
    <button class="btnCalcular" onclick="">COMPRAR</button>
    
    `)

});













