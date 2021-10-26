let entrar = document.getElementById("btnEntrar");
let registrar = document.getElementById("btnRegistrar");


class Usuario {
    static contadorUsuario = 0;
    constructor(usuario, contraseña){
        this._idUsuario = ++Usuario.contadorUsuario;
        this._usuario = usuario;
        this._contraseña = contraseña;
    }
    get idUsuario (){return this._idUsuario;}

    get usuario(){return this._usuario;}
    set usuario(usuario){return this._usuario = usuario;}

    get contraseña(){return this._contraseña;}
    set contraseña(contraseña){return this._contraseña = contraseña;}
}

const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

registrar.addEventListener("click", function(e){
    e.preventDefault();
    let forma = document.forms["forma"];
    let usuario = forma["usuario"];
    let contraseña = forma["contraseña"];

    if(usuario !="" && contraseña != ""){
        let usuario1 = new Usuario(usuario.value, contraseña.value);
        usuarios.push(usuario1);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        document.getElementById("mensaje").innerHTML = "Registro Confirmado";
    }

    usuario.value ="";
    contraseña.value = "";
})

entrar.addEventListener("click", function(e){
    e.preventDefault();
    let listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
    let forma = document.forms["forma"];
    let nombreUsuario = forma["usuario"];
    let valorContraseña = forma["contraseña"];

    const chequeoUsuario = listaUsuarios.find(e => e._usuario === nombreUsuario.value);

    if(chequeoUsuario){
        if(valorContraseña.value == chequeoUsuario._contraseña){
            document.getElementById("forma").style.display = "none";
            
            document.getElementById("web").style.display = "flex"
        }
        else{
            document.getElementById("mensaje").innerHTML = "Contraseña Erronea" 
        }
    }

    else{
        document.getElementById("mensaje").innerHTML = "Usuario no registrado"
    }


})

let contenedorUsuario = document.querySelector(".cartaUsuario");
fetch('https://randomuser.me/api/')
.then(res => res.json())
.then(data =>{
    contenedorUsuario.innerHTML = `
    <img class="imgUsuario" src="${data.results[0].picture.large}" alt="">
    <p class="nombreUsuario">Nombre: ${data.results[0].name.first}</p>
    `

})





