

let cargarApp = () =>{
    //reserva();
}

let diaSemana = new Date().getDay();

let dia = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
document.getElementById("dia1").innerHTML = dia[diaSemana];
document.getElementById("dia2").innerHTML = dia[diaSemana + 1];
let cadenaFicha = "";





let reserva = () =>{
    let forma = document.forms["forma"];
    let nombre = forma["nombre"];
    let horario = forma["horario1"];
    cadenaFicha +=`
        <div class="Reservacion">
                <div class="diaSema marg">${dia[diaSemana]}</div>
                <label for="nombre marg">Nombre:</label>
                <div class="txtNombre marg">${nombre.value}</div>
                <label for="nombre marg">Horario:</label>
                <div class="txtHorario marg">${horario.value}</div>
            </div>
        `;

    document.getElementById("contenedorReservas").innerHTML = cadenaFicha;
}

let reserva2 = () =>{
    let forma2 = document.forms["forma2"];
    let nombre2 = forma2["nombre"];
    let horario2 = forma2["horario2"];
    cadenaFicha +=`
        <div class="Reservacion">
                <div class="diaSema marg">${dia[diaSemana + 1]}</div>
                <label for="nombre marg">Nombre:</label>
                <div class="txtNombre marg">${nombre2.value}</div>
                <label for="nombre marg">Horario:</label>
                <div class="txtHorario marg">${horario2.value}</div>
            </div>
        `;

    document.getElementById("contenedorReservas").innerHTML = cadenaFicha;
}